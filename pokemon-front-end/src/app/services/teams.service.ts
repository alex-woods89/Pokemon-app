import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../team';


const POKETEAM_URL = "https://localhost:7267/api/teams/"

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get<Team[]>(POKETEAM_URL )
  }

  createTeam(team: Team){
    return this.http.post(POKETEAM_URL, team)
  }
}
