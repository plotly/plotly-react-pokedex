'use strict';

import PokeStore from '../Stores/PokeStore';
import React, { PropTypes } from 'react';

export default React.createClass({

  getInitialState() {
    return {
      pokedex: PokeStore.getAll()
    };
  },

  render() {
    return (
      <div>
        <h1>Pokédex</h1>
      </div>
    );
  }
});
