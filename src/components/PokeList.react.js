'use strict';

import ImmutableTypes from 'react-immutable-proptypes';
import React, { PropTypes } from 'react';

import PokeListItem from './PokeListItem.react';

export default React.createClass({

    propTypes: {

        pokedex: ImmutableTypes.listOf(ImmutableTypes.shape({
            name: PropTypes.string.isRequired,
            resource_uri: PropTypes.string.isRequired
        })).isRequired,

        addPokemonToRoster: React.PropTypes.func.isRequired

    },

    /*
     * Sub render process to create the PokeListItems. We just iterate
     * over an Immutable array of pokemon objects, and pass the values
     * of each as props to new PokeListItem components.
     * We also pass in the `i` index as a `key` prop, so that React
     * can efficiently re-render when something changes.
     */
    renderPokeList() {

        const pokeList = this.props.pokedex.map((pokemon, i) => {
            return (
                <PokeListItem key={i}
                              pokemon={pokemon}
                              addPokemonToRoster={this.props.addPokemonToRoster}/>
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
