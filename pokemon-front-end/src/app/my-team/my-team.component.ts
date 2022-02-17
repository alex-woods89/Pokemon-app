import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonTeamService } from '../services/pokemon-team.service';
import { TeamsService } from '../services/teams.service';
import { Team } from '../team';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  constructor(private pokeTeamService: PokemonTeamService) { }

  showPokemonStats = false;
  @Input() team: Team = new Team();

  ngOnInit(): void {
  }

  logPokemon(pokemon: Pokemon){
    console.log(pokemon)
  }

  removeFromTeam(pokemon: Pokemon){
    let index = this.team.pokemons.indexOf(pokemon)
    this.team.pokemons.splice(index, 1)
    this.pokeTeamService.removePokemonFromTeam(pokemon).subscribe()
  }

  showStats(){
    this.showPokemonStats = !this.showPokemonStats
  }

}
