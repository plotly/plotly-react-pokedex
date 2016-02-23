'use strict';

import React from 'react';

const PokeRoster = React.createClass({

    propTypes: {
        roster: React.PropTypes.object.isRequired
    },

    render() {

        // Convert the Immutable Map of our roster to a plain JS Array
        const pokemon = this.props.roster.toList().toJS();

        // Create a little DIV for each Pokemon in our roster
        const rosterItems = pokemon.map((rosterPokemon, i) => {
            return (
                <div className="poke-item" key={i}>
                    {rosterPokemon.name}
                </div>
            )
        });

        // Render the parent with our roster items inside!
        return (
            <div className="poke-list">
                {rosterItems}
            </div>
        );
    }
});

module.exports = PokeRoster;
