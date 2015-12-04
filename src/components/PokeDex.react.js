'use strict';

import * as PokeActions from '../actions/PokeActions';
import pokeStoreListener from '../utils/listeners/pokeStore.mixin';
import PokeList from './PokeList.react';
import ActivePokemon from './ActivePokemon.react';
import PokeStore from '../stores/PokeStore';
import React, { PropTypes } from 'react';

export default React.createClass({

    mixins: [pokeStoreListener],

    getInitialState() {
        return this._getState();
    },

    componentDidMount() {
        PokeActions.getAll();
    },

    _getState() {
        return {
            pokedex: PokeStore.getAll(),
            pokemon: PokeStore.getOne()
        };
    },

    _onStoreUpdate() {
        this.setState(this._getState());
    },

    render() {
        return (
            <div className='container'>
                <h1>Pokédex</h1>

                <div>
                    {`there are ${this.state.pokedex.size} pokemon`}
                </div>

                <ActivePokemon pokemon={this.state.pokemon}/>

                <PokeList pokedex={this.state.pokedex} />
            </div>
        );
    }
});
