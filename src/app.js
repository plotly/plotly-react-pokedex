'use strict';

import PokeDex from './components/PokeDex.react';
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <PokeDex />,
    document.getElementById('app')
  );
});
