'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var BaseStore = assign({}, EventEmitter.prototype, {

    /**
     * @param {...args} The parameters you wish to emit
     */
    emitChange: function() {
        var args = [CHANGE_EVENT].concat(Array.prototype.slice.call(arguments));
        this.emit.apply(this, args);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    /**
     * [exports description]
     * @type {[type]}
     */
    extend: function(obj){
        return assign({}, BaseStore, obj);
    }
});

module.exports = BaseStore;
