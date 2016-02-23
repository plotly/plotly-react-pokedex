'use strict';

import { EVENTS } from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import BaseStore from './BaseStore';
import Immutable from 'immutable';

let _pokeStore = {
    pokedex: Immutable.List(),
    roster: Immutable.Map()
};

/**
* @param {obj[]} pokedex - an ordered array of pokemon, where each pokemon's
*    index in the array is the same as their ID.
*/
function addAll(pokedex) {
    _pokeStore.pokedex = Immutable.fromJS(pokedex);
}

function addToRoster(pokemon) {
    _pokeStore.roster = _pokeStore.roster.set(pokemon.name, pokemon);
}

const PokeStore = BaseStore.extend({

    /**
    * @returns {Immutable.List}
    */
    getAll() {
        return _pokeStore.pokedex;
    },

    getRoster() {
        return _pokeStore.roster;
    }
});

PokeStore.dispatchToken = AppDispatcher.register(action => {

    switch(action.event) {

        case EVENTS.POKEMON.GET_ALL:
            addAll(action.data.pokedex);
            PokeStore.emitChange();
            break;

        case EVENTS.POKEMON.ADD_TO_ROSTER:
            addToRoster(action.data);
            PokeStore.emitChange();
            break;
    }
});

module.exports = PokeStore;
