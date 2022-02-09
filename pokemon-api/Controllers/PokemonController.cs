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

        public PokemonController(Pokebase pokemonContext)
        {
            _pokemonContext = pokemonContext;
        }

        // GET: api/<PokemonController>
        [HttpGet]
        public IEnumerable<Pokemon> Get()
        {
            return _pokemonContext.Pokemons.ToList();
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
