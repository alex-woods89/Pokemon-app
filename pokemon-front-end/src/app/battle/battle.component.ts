import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { TeamsService } from '../services/teams.service';
import { Team } from '../team';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  teams: Team[] = []
  teamA: Team = new Team
  teamB: Team = new Team
  winningTeam: Team = new Team

  constructor(private teamService: TeamsService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(
      res => this.teams = res
    )
  }

  selectTeamA(team: Team){
    this.teamA = team
    console.log(this.teamA)
  }

  selectTeamB(team: Team){
    this.teamB = team
    console.log(this.teamB)
  }

  battle(teamA: Team, teamB: Team){

    let teamAPokemons = teamA.pokemons
    let teamBPokemons = teamB.pokemons

    //while both teams have some pokemon left alive
    while(teamAPokemons.length > 0 && teamBPokemons.length > 0){
      //loop through each of the pokemon in turn
      for(let i = 0; i < teamAPokemons.length; i++){
        let teamAPokemon = teamAPokemons[0]
        let teamBPokemon = teamBPokemons[0]
        
        if(teamAPokemon != null && teamBPokemon != null){
        //while both pokemon are alive
        while(this.isPokemonAlive(teamAPokemon) && this.isPokemonAlive(teamBPokemon)){
  
          //team A Pokemon attacks Team B pokemon and reduces Team B pokemons HP by their attack
          this.attack(teamAPokemon, teamBPokemon)
    
          //if team B pokemon is still alive i.e their hp is greater than 1 they can attack back
          if(this.isPokemonAlive(teamBPokemon)){
            this.attack(teamBPokemon, teamAPokemon)
          }
    
          }
        //remove dead pokemon from arrays
        if(!this.isPokemonAlive(teamAPokemon)){
          teamAPokemons.splice(i, 1)
        }
  
        if(!this.isPokemonAlive(teamBPokemon)){
          teamBPokemons.splice(i, 1)
        }
  
       }
      }

      } 
    teamA.pokemons = teamAPokemons
    teamB.pokemons = teamBPokemons
    this.determineWinner(teamA, teamB)
  }

  attack(pokemonA: Pokemon, pokemonB: Pokemon){
    pokemonB.data.stats[0].base_stat -= pokemonA.data.stats[1].base_stat
  }

  isPokemonAlive(pokemon: Pokemon){
    return pokemon.data.stats[0].base_stat > 0
  }

  determineWinner(teamA: Team, teamB: Team){
    teamA.pokemons.length > 0 ? this.winningTeam = teamA : this.winningTeam = teamB 
  }
}
