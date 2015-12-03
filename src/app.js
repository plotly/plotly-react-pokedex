'use strict';

import PokeDex from './components/PokeDex.react';
import React from 'react';
import ReactDOM from 'react-dom';

/*
 * Wait until the DOM is loaded so that we have an element to render into.
 * (The 'DOMContentLoaded' method is akin to $(document).ready(...) in jQuery.)
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <PokeDex />,
    document.getElementById('app')
  );
});
