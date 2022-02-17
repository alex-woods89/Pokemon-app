import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Team } from '../team';
import { FormControl } from '@angular/forms';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private teamService: TeamsService) { }

  teams: Team[] = []
  newTeam: Team = new Team
  selectedTeam: Team = new Team();

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(
      res => this.teams = res
    )
  }

  onSubmit(){
    this.teamService.createTeam(this.newTeam).subscribe()
    this.teams.push(this.newTeam)   
    this.newTeam = new Team
  }

  selectTeam(team: Team){
    this.selectedTeam = team;
    console.log(this.selectedTeam);
  }
}
