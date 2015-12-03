'use strict';

import ImmutableTypes from 'react-immutable-proptypes';
import React, { PropTypes } from 'react';

export default React.createClass({

  propTypes: {

    pokedex: ImmutableTypes.listOf(ImmutableTypes.shape({
      name: PropTypes.string.isRequired,
      resource_uri: PropTypes.string.isRequired
    })).isRequired
  },

  render() {
    return (
      <div>
        there are {this.props.pokedex.size} pokemon
      </div>
    );
  }
});
