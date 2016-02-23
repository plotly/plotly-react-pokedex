'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import { EVENTS } from '../constants/AppConstants';
import PokeAPI from 'pokeapi';

/**
* Initialize the PokeAPI. For more information, check out the official docs:
* @see http://pokeapi.co/docs/#pokemon
*/
const API = PokeAPI.v1();

/**
* Fetches and dispatches a list of all Pokemon in the Pokédex.
* Each entry contains only the most minimal data for each Pokemon
* (name and resource ID).
*/
export function getAll() {
    API.get('pokedex', 1).then(response => {

        /*
        * Grab the list of Pokemon from the response
        */
        const pokedex = response.pokemon;

        /*
        * Dispatch it to the stores. Stores can grab this data by
        * registering a handler for the EVENTS.POKEMON.GET_ALL event
        * with the dispatcher. Check out PokeStore.js as an example.
        */
        AppDispatcher.dispatch({
            event: EVENTS.POKEMON.GET_ALL,
            data: {
                pokedex: pokedex
            }
        });
    });
}

/**
* Fetches and dispatches data on a single Pokemon.
* For example, PokeActions.get('api/v1/pokemon/1/') should return metadata for Bulbasaur.
*
* @param {int} resource_uri - the Pokemon's resource_uri
*/
export function addPokemonToRoster(resource_uri) {

    API.get({ resource_uri: `/${resource_uri}` }).then(response => {
        AppDispatcher.dispatch({
            event: EVENTS.POKEMON.ADD_TO_ROSTER,
            data: response
        });
    });

}
