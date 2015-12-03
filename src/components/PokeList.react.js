'use strict';

import ImmutableTypes from 'react-immutable-proptypes';
import React, { PropTypes } from 'react';

import PokeListItem from './PokeListItem.react';

export default React.createClass({

    propTypes: {

        pokedex: ImmutableTypes.listOf(ImmutableTypes.shape({
            name: PropTypes.string.isRequired,
            resource_uri: PropTypes.string.isRequired
        })).isRequired

    },

    renderPokeList() {

        const pokeList = this.props.pokedex.map((pokemon, i) => {
            return (
                <PokeListItem key={i} pokemon={pokemon}/>
            );
        });

        return pokeList;
    },

    render() {
        return (
            <div className="poke-list">
                { this.renderPokeList() }
            </div>
        );
    }
});
