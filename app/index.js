import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = (props) => {
    return (
      <div>
        <h1>Bulbasaur #001</h1>
        <h2>Seed Pokémon</h2>
        <img src="app/assets/images/bulbasaur.jpg" />
        <h2>Pokédex</h2>
        <ul>
          <li><strong>Type</strong> Grass, Poison</li>
          <li><strong>Height</strong> 2'4" (0.71m)</li>
          <li><strong>Weight</strong> 15.2 lbs (6.9 kg)</li>
          <li><strong>Abilities</strong> Overgrow, Chlorophyll</li>
        </ul>
      </div>
    )
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
