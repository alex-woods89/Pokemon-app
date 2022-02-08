package com.example.pokemonapi.controllers;

import com.example.pokemonapi.models.Pokemon;
import com.example.pokemonapi.repositories.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/pokemon")
public class PokeController {

    @Autowired
    PokemonRepository pokemonRepository;

    @GetMapping
    public List<Pokemon> getAllPokemon(){
        return  pokemonRepository.findAll();
    }

    @PostMapping
    public void savePokemon(@RequestBody Pokemon pokemon){
        pokemonRepository.save(pokemon);
    }

    @DeleteMapping
    public void deleteAllPokemon(){
        pokemonRepository.deleteAll();
    }
}

