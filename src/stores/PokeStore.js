'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import BaseStore from './BaseStore';
import Immutable from 'immutable';

const pokeStore = {};

const PokeStore = BaseStore.extend({

  /**
   * @returns {Immutable.List}
   */
  getAll() {
    return Immutable.List()
  }
});

PokeStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.event) {

  }
});

module.exports = PokeStore;
