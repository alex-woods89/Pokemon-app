import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonTeamService } from '../services/pokemon-team.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  constructor(private pokeTeamService: PokemonTeamService) { }

  team: Pokemon[] = []
  showPokemonStats = false;

  ngOnInit(): void {
    this.pokeTeamService.getTeam().subscribe(
      response => this.team = response
    )
  }

  logPokemon(pokemon: Pokemon){
    console.log(pokemon)
  }

  removeFromTeam(pokemon: Pokemon){
    this.pokeTeamService.deletePokemonFromTeam(pokemon).subscribe()
    this.team.forEach((x,index) => {
      if(x.id == pokemon.id) this.team.splice(index, 1)
    });
  }

  showStats(){
    this.showPokemonStats = !this.showPokemonStats
  }

}
