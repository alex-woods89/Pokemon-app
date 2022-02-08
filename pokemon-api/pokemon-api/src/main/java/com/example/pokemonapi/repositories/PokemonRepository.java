package com.example.pokemonapi.repositories;

import com.example.pokemonapi.models.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PokemonRepository extends JpaRepository<Pokemon, Long> {
}
