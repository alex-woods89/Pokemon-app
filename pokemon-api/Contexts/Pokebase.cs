using Microsoft.EntityFrameworkCore;
using pokemon_api.Models;

namespace pokemon_api.Contexts
{
    public class Pokebase : DbContext
    {
        public Pokebase(DbContextOptions<Pokebase> options) : base(options)
        {

        }

        public DbSet<Pokemon> Pokemons { get; set; }
        public DbSet<PokeTeam> PokemonTeams { get; set; }

    }
}
