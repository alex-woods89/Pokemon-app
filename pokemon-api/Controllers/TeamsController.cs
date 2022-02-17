using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pokemon_api.Contexts;
using pokemon_api.Models;
using System.Text.Json;

namespace pokemon_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {

        private readonly Pokebase _pokemonContext;
        private IHttpClientFactory _httpClientFactory;

        public TeamsController(Pokebase pokemonContext, IHttpClientFactory httpClientFactory)
        {
            _pokemonContext = pokemonContext;
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public List<PokeTeam> Get()
        {
            List<PokeTeam> teams = _pokemonContext.PokemonTeams.ToList();

            teams.ForEach(team => team = MapPokemonToTeam(team));
            foreach(var team in teams)
            {
                foreach(Pokemon pokemon in team.Pokemons)
                {
                    pokemon.Data = MapDataToPokemon(pokemon).Result.Data;
                }
            }
            return teams;
        }

        [HttpGet("{id}")]
        public PokeTeam Get(int id)
        {
            PokeTeam team = _pokemonContext.PokemonTeams.Where(x => x.Id == id).First();
            PokeTeam teamWithPokemon = MapPokemonToTeam(team);
            teamWithPokemon.Pokemons.ForEach(x => x = MapDataToPokemon(x).Result);

            return teamWithPokemon;

        }

        [HttpPost]
        public void Post(PokeTeam pokeTeam)
        {
            _pokemonContext.PokemonTeams.Add(pokeTeam);
            _pokemonContext.SaveChanges();
        }

        private PokeTeam MapPokemonToTeam(PokeTeam team)
        {
            List<Pokemon> pokemonInTeam = _pokemonContext.Pokemons.Where(x => x.PokeTeamID == team.Id).ToList();

            team.Pokemons = pokemonInTeam;

            return team;
        }

        private async Task<Pokemon> MapDataToPokemon(Pokemon pokemon)
        {
            HttpClient http = _httpClientFactory.CreateClient();

                var data = http.GetStreamAsync(pokemon.Url);
                pokemon.Data = JsonSerializer.DeserializeAsync<object>(await data).Result;
            
            return pokemon;
        }

    }
}
