'use strict';

import { EVENTS } from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import BaseStore from './BaseStore';
import Immutable from 'immutable';

const _pokeStore = {
  pokedex: Immutable.List(),
  pokemon: {}
};

/**
 * @param {obj[]} pokedex - an ordered array of pokemon, where each pokemon's
 *    index in the array is the same as their ID.
 */
function addAll(pokedex) {
  _pokeStore.pokedex = Immutable.fromJS(pokedex);
}

const PokeStore = BaseStore.extend({

  /**
   * @returns {Immutable.List}
   */
  getAll() {
    return _pokeStore.pokedex;
  },

  getOne() {
    return _pokeStore.pokemon;
  }
});

PokeStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.event) {

    case EVENTS.POKEMON.GET_ALL:
      addAll(action.data.pokedex);
      PokeStore.emitChange();
      break;

    case EVENTS.POKEMON.GET_ONE:
      const pokemon = action.data.pokemon;
      _pokeStore.pokemon = pokemon;
      PokeStore.emitChange();
      break;
  }
});

module.exports = PokeStore;
