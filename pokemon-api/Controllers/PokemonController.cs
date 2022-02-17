using Microsoft.AspNetCore.Mvc;
using pokemon_api.Contexts;
using pokemon_api.Models;

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
        public List<Pokemon> Get()
        {
            return _pokemonContext.Pokemons.OrderBy(x => x.Name).ToList(); 
        }

        // GET api/<PokemonController>/5
        [HttpGet("{id}")]
        public Pokemon Get(int id)
        {
            return _pokemonContext.Pokemons.Where(x => x.Id == id).First();
        }

        // POST api/<PokemonController>
        [HttpPost]
        public void Post(Pokemon pokemon)
        {
            _pokemonContext.Pokemons.Add(pokemon);
            _pokemonContext.SaveChanges();
        }

        // PUT api/<PokemonController>/5
        [HttpPut]
        public void Put(Pokemon pokemon)
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
