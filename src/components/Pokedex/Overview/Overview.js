import React, { useState, useEffect } from 'react';
import Pokedex from 'pokedex-promise-v2';
import config from '../../../config';

const Overview = ({ id }) => {
//   const [pokemon, setPokemon] = useState(null);
//   const PokeAPI = new Pokedex();

//   useEffect(() => {
//     PokeAPI.getResource([`${config.pokeAPI.uri}/pokemon/${id}`]).then(
//       (response) => {
//         console.log(response);
//       }
//     );
//   }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Cras mattis consectetur purus sit amet fermentum.
        </div>
      </div>
    </div>
  );
};

export default Overview;
