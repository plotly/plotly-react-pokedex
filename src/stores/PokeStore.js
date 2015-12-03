'use strict';

import { EVENTS } from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import BaseStore from './BaseStore';
import Immutable from 'immutable';

const _pokeStore = {
  pokedex: Immutable.List()
};

const PokeStore = BaseStore.extend({

  /**
   * @returns {Immutable.List}
   */
  getAll() {
    return _pokeStore.pokedex;
  }
});

PokeStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.event) {

    case EVENTS.POKEMON.GET_ALL:
      const pokedex = action.data.pokedex;
      _pokeStore.pokedex = Immutable.fromJS(pokedex);
      PokeStore.emitChange();
      break;
  }
});

module.exports = PokeStore;
