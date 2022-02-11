import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemon } from '../pokemon';

const POKETEAM_URL = "https://localhost:7267"

@Injectable({
  providedIn: 'root'
})
export class PokemonTeamService {

  constructor(private http: HttpClient) { }

  getTeam(){
    return this.http.get<Pokemon[]>(POKETEAM_URL + '/api/Pokemon')
  }

  addPokemonToTeam(pokemon: Pokemon){
    return this.http.post(POKETEAM_URL + '/api/Pokemon', pokemon)
  }

  deletePokemonFromTeam(pokemon: Pokemon){
    return this.http.delete(POKETEAM_URL + `/api/Pokemon/${pokemon.id}`)
  }
}
