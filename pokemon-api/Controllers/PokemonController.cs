using Microsoft.AspNetCore.Mvc;
using pokemon_api.Contexts;
using pokemon_api.Models;
using System.Text.Json;

namespace pokemon_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokemonController : ControllerBase
    {

        private readonly Pokebase _pokemonContext;
        private IHttpClientFactory _httpClientFactory;

        public PokemonController(Pokebase pokemonContext, IHttpClientFactory httpClientFactory)
        {
            _pokemonContext = pokemonContext;
            _httpClientFactory = httpClientFactory;
        }

        // GET: api/<PokemonController>
        [HttpGet]
        public async Task<IEnumerable<Pokemon>> Get()
        {
            IEnumerable<Pokemon> pokemons = _pokemonContext.Pokemons.ToList().OrderBy(x => x.Name); 
            HttpClient http = _httpClientFactory.CreateClient();

            foreach (Pokemon pokemon in pokemons)
            {
                var data = http.GetStreamAsync(pokemon.Url);
                pokemon.Data = JsonSerializer.DeserializeAsync<object>(await data).Result;
            }
            return pokemons;
        }

        // GET api/<PokemonController>/5
        [HttpGet("{id}")]
        public Pokemon Get(int id)
        {
            return _pokemonContext.Pokemons.Where(x => x.Id == id).First();
        }

        // POST api/<PokemonController>
        [HttpPost]
        public void Post([FromBody] Pokemon pokemon)
        {
            _pokemonContext.Pokemons.Add(pokemon);
            _pokemonContext.SaveChanges();
        }

        // PUT api/<PokemonController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Pokemon pokemon)
        {
            _pokemonContext.Pokemons.Update(pokemon);
            _pokemonContext.SaveChanges();
        }

        // DELETE api/<PokemonController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Pokemon pokemon = _pokemonContext.Pokemons.Where(x => x.Id == id).First();

            if(pokemon != null)
            {
                _pokemonContext.Pokemons.Remove(pokemon);
                _pokemonContext.SaveChanges();
            }
        }
    }
}
