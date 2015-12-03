'use strict';

import React, { PropTypes } from 'react';
import ImmutableTypes from 'react-immutable-proptypes';

/**
 * Instances of this component represent a single pokemon item in
 * the PokeList
 */
export default React.createClass({
    propTypes: {
        pokemon: ImmutableTypes.shape({
            name: PropTypes.string.isRequired,
            resource_uri: PropTypes.string.isRequired
        })
    },

    render () {
        return (
            <div>
                <h3>{this.props.pokemon.get('name')}</h3>
                <p>{this.props.pokemon.get('resource_uri')}</p>
            </div>
        );
    }
});
