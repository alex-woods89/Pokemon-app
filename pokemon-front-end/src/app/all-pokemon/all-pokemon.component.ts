import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.css']
})
export class AllPokemonComponent implements OnInit {

  pokemons: any

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
      this.pokemons = this.pokeService.getPokemons()

      console.log(this.pokemons)
  }

}
