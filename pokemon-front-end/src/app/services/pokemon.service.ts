import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'


export interface Pokemon {
  name: string,
  url: string
  data: any
}


interface PokeAPIResponse {
  count: number,
  next: string,
  previous: string,
  results: Array<Pokemon>
}


/**
 * PokéAPI service.
 */
 @Injectable({ providedIn: 'root' })
export class PokemonService {
  private pokemons: Array<Pokemon> = []

  constructor(private http: HttpClient) {
    this.getListOfPokemonUrls().subscribe(
      (results: Array<Pokemon>) => {
        for(let p of results) {
          this.pokemons.push(p)
        }

        for(let p of this.pokemons){
          this.getPokemonData(p.url).subscribe(
            response => p.data = response
          )
        }
      }
    )
  }

  getPokemons(): Array<Pokemon> {
    return this.pokemons
  }

  private getListOfPokemonUrls(): Observable<Array<Pokemon>> {
    return this.http.get<any>(POKEAPI_URL)
      .pipe(
        map((response: PokeAPIResponse) => response.results)
      );
  }

  getPokemonData(url: string){
    return this.http.get<any>(url)
  }
}