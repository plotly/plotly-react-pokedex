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
  API.get('pokedex').then(response => {

    /*
     * Grab the list of Pokemon from the response
     */
    const pokedex = response.objects[0].pokemon;

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
 * For example, PokeActions.get(1) should return metadata for Bulbasaur.
 *
 * @param {int} id - the numeric Pokemon ID
 */
export function get(id) {
  // TODO fill me in!
}
