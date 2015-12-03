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

    getInitialState() {
        return {
            isOpen: false
        };
    },

    toggleOpen() {

        this.setState({
            isOpen: !this.state.isOpen
        });
    },

    renderMoreInfo() {
        if (this.state.isOpen) {
            return (
                <div className="--more-info">
                    <p className="no-margin">
                        {`resource_uri: ${this.props.pokemon.get('resource_uri')}`}
                    </p>
                </div>
            );
        }

        else return null;
    },

    render () {

        return (
            <div className="poke-item" onClick={this.toggleOpen}>

                <h3 className="no-margin">{this.props.pokemon.get('name')}</h3>

                {this.renderMoreInfo()}
            </div>
        );
    }
});
