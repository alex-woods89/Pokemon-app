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
        [Column("name")]
        public string? Name { get; set; }
        [Column("url")]
        public string? Url { get; set; }
    }
}
