'use strict';

import * as PokeActions from '../actions/PokeActions';
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

    /*
     * This component has a local state of `isOpen` which will determine
     * whether or not the extra information section will be rendered
     * at any given time. We want all the PokeListItems to be closed by default,
     * until the user clicks them. You will see the handling below
     */
    getInitialState() {
        return {
            isOpen: false
        };
    },

    /*
     * We set up this method to handle clicks on the PokeListItem.
     * It takes its current isOpen value and sets its local state
     * which forces a re-render!
     */
    toggleOpen() {

        PokeActions.get(1);

        this.setState({
            isOpen: !this.state.isOpen
        });
    },

    /*
     * Here we have a sub-render method, you can see that it gets called inside
     * our main `render` method. This means that we can modularize our component,
     * and handle logic and pass things off to these sub-renderers that we create!
     */
    renderMoreInfo() {

        /*
         * In this case, if it has been clicked and the local state.isOpen === true,
         * we want to render a moreInfo panel! If not, returning null means
         * React will render nothing!
         */
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

        /* Let's snag the name value from the immutable object */
        const pokeName = this.props.pokemon.get('name');

        return (
            <div className="poke-item" onClick={this.toggleOpen}>

                <h3 className="no-margin">{pokeName}</h3>

                {this.renderMoreInfo()}
            </div>
        );
    }
});
