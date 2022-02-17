import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonTeamService } from '../services/pokemon-team.service';
import { PokemonService } from '../services/pokemon.service';
import { TeamsService } from '../services/teams.service';
import { Team } from '../team';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.css']
})
export class AllPokemonComponent implements OnInit {

  pokemons: Pokemon[] = []
  teams: Team[] = []
  selectedTeam: Team = new Team()
  searchTerm = ''

  constructor(private pokeService: PokemonService, private teamService: TeamsService, private pokeTeamService: PokemonTeamService) { }

  ngOnInit(): void {
      this.pokemons = this.pokeService.getPokemons()
      this.getTeams()

  }

  selectTeam(team: Team){
    console.log(team)
    this.selectedTeam = team
  }

  addToTeam(pokemon: Pokemon){
    pokemon.pokeTeamID = this.selectedTeam.id
    this.selectedTeam.pokemons.push(pokemon)
    this.pokeTeamService.addPokemonToTeam(pokemon).subscribe()
    this.getTeams()
  }

  getTeams(){
    this.teamService.getTeams().subscribe(
      res => this.teams = res
    )

  }

}
