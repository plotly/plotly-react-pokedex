'use strict';

import * as PokeActions from '../actions/PokeActions';
import pokeStoreListener from '../utils/listeners/pokeStore.mixin';
import PokeList from './PokeList.react';
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
      pokedex: PokeStore.getAll()
    };
  },

  _onStoreUpdate() {
    this.setState(this._getState());
  },

  render() {
    return (
      <div className='container'>
        <h1>Pokédex</h1>
        <PokeList pokedex={this.state.pokedex} />
      </div>
    );
  }
});
