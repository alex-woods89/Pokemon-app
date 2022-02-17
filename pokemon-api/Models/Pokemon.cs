using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pokemon_api.Models
{
    [Table("pokemon")]
    public class Pokemon
    {
        [Key, Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string? Name { get; set; }

        
        public string? Url { get; set; }

        public int PokeTeamID { get; set; }

        [NotMapped]
        public Object? Data { get; set; }   
    }
}
