'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import { EVENTS } from '../constants/AppConstants';
import PokeAPI from 'pokeapi';

const API = PokeAPI.v1();

export function getAll() {
  API.get('pokedex').then(response => {
    AppDispatcher.dispatch({
      event: EVENTS.POKEMON.GET_ALL,
      data: {
        pokedex: response.objects[0].pokemon
      }
    });
  });
}
