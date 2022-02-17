import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';

const POKEMON_URL = "https://localhost:7267/api/pokemon/"

@Injectable({
  providedIn: 'root'
})
export class PokemonTeamService {

  constructor(private http: HttpClient) { }

  addPokemonToTeam(pokemon: Pokemon){
    return this.http.post(POKEMON_URL, pokemon)
  }

  removePokemonFromTeam(pokemon: Pokemon){
    return this.http.delete(POKEMON_URL + pokemon.id)
  }
}
