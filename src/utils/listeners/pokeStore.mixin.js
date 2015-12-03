'use strict';

const PokeStore = require('../../stores/PokeStore');

/**
 * @param  {Store} Store
 * @return {Object} A react mixin with necessary methods to assemble a Store and a component
 */
module.exports = {

    /**
     * Listen to the Store for Change Events.
     * Change Events in the store will now trigger our _onChange Handler.
     */
    componentDidMount: function() {
        PokeStore.addChangeListener(this._onStoreUpdate);
    },

    /**
     * Clean up our listener from the Store when component unmounts.
     */
    componentWillUnmount: function() {
        PokeStore.removeChangeListener(this._onStoreUpdate);
    }
};
