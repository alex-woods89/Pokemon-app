using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pokemon_api.Contexts;
using pokemon_api.Models;

namespace pokemon_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {

        private readonly Pokebase _pokemonContext;

        public TeamsController(Pokebase pokemonContext, IHttpClientFactory httpClientFactory)
        {
            _pokemonContext = pokemonContext;
        }

        [HttpGet]
        public List<PokeTeam> Get()
        {
            return _pokemonContext.PokemonTeams.ToList();
        }

        [HttpPost]
        public void Post(PokeTeam pokeTeam)
        {
            _pokemonContext.PokemonTeams.Add(pokeTeam);
            _pokemonContext.SaveChanges();
        }
    }
}
