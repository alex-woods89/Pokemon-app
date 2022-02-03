package com.example.pokemonapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PokeController {

    @GetMapping
    public String getPokemon(){
        return "Gotta Catch Em All";
    }
}
