'use strict';

import * as PokeActions from '../actions/PokeActions';
import pokeStoreListener from '../utils/listeners/pokeStore.mixin';
import PokeList from './PokeList.react';
import PokeRoster from './PokeRoster.react';
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

            // We add another state getter here!
            roster: PokeStore.getRoster()
        };
    },

    _onStoreUpdate() {
        this.setState(this._getState());
    },

    render() {
        return (
            <div className='container'>
                <div className="block-group">

                    <div className="block" style={{width: '50%'}}>

                        <h1>{'Pokédex'}</h1>

                        <div>
                            {`there are ${this.state.pokedex.size} pokemon`}
                        </div>

                        <PokeList pokedex={this.state.pokedex}
                                  addPokemonToRoster={PokeActions.addPokemonToRoster}/>

                    </div>

                    <div className="block" style={{width: '50%'}}>
                        <h1>{'Your Roster'}</h1>

                        <PokeRoster roster={this.state.roster}/>
                    </div>

                </div>

            </div>
        );
    }
});
