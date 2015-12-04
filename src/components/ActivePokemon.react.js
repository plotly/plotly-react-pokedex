'use strict';

import React from 'react';

export default React.createClass({
    propTypes: {
        pokemon: React.PropTypes.shape({
            name: React.PropTypes.string,
            happiness: React.PropTypes.number,
            height: React.PropTypes.string
        })
    },
    render() {
        if (!Object.keys(this.props.pokemon).length) {
            return null;
        }

        return (
            <div>
                <h5>{this.props.pokemon.name}</h5>

                <ul>
                    <li>{this.props.pokemon.happiness}</li>
                    <li>{this.props.pokemon.height}</li>
                </ul>
            </div>
        );
    }
});
