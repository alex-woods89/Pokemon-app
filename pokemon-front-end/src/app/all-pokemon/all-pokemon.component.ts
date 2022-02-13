import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonTeamService } from '../services/pokemon-team.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.css']
})
export class AllPokemonComponent implements OnInit {

  pokemons: Pokemon[] = []
  searchTerm = ''

  constructor(private pokeService: PokemonService, private pokeTeamService: PokemonTeamService) { }

  ngOnInit(): void {
      this.pokemons = this.pokeService.getPokemons()
  }

  addToTeam(pokemon: Pokemon) {
    this.pokeTeamService.addPokemonToTeam(pokemon).subscribe()
  }
}
