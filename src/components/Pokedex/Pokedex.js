import React, { useState, useEffect } from 'react';
import axios from 'axios';

import config from '../../config';
import { handleError, handleResponse } from '../../utils/api/apiUtils';
import Overview from './Overview/Overview';
import TypeEffectiveness from './TypeEffectiveness/TypeEffectiveness';

import './Pokedex.scss';

const PokedexContent = () => {
  const [listOfPokemon, setListOfPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [page, setPage] = useState('Type Effectiveness');
  const [showPokemonSelection, setShowPokemonSelection] = useState(false);
  const [offset, setOffset] = useState(0);
  const [totalPokemon, setTotalPokemon] = useState(0);

  useEffect(() => {
    const url = `${config.pokeAPI.uri}/pokemon?limit=100&offset=0`;
    axios
      .get(url)
      .then(handleResponse)
      .catch(handleError)
      .then((response) => {
        setListOfPokemon(response.data.results);
        setTotalPokemon(response.data.count);
        axios
          .get(response.data.results[0].url)
          .then(handleResponse)
          .catch(handleError)
          .then((resp) => {
            setSelectedPokemon(resp.data);
          });
      });
  }, []);

  useEffect(() => {
    const url = `${config.pokeAPI.uri}/pokemon?limit=100&offset=${offset}`;
    axios
      .get(url)
      .then(handleResponse)
      .catch(handleError)
      .then((response) => {
        setListOfPokemon(response.data.results);
      });
  }, [offset]);

  const handleButton = (event) => {
    setPage(event.target.innerText);
  };

  const handleChangeButton = () => {
    setShowPokemonSelection(!showPokemonSelection);
  };

  const handleChangePokemon = (event) => {
    const url = `${config.pokeAPI.uri}/pokemon/${event.target.innerText}`;
    console.log(url);
    axios
      .get(url)
      .then(handleResponse)
      .catch(handleError)
      .then((resp) => {
        setSelectedPokemon(resp.data);
        setShowPokemonSelection(false);
      });
  };

  const handleNextButton = () => {
    setOffset(offset + 100);
  };

  const handlePrevButton = () => {
    setOffset(offset - 100);
  };

  return (
    <div className="tile is-ancestor mb-5">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by3">
                <img
                  src={
                    selectedPokemon
                      ? selectedPokemon.sprites.front_default
                      : 'https://bulma.io/images/placeholders/1280x960.png'
                  }
                  alt={selectedPokemon ? selectedPokemon.name : 'placeholder'}
                />
              </figure>
            </div>
          </div>
          <div className="mt-6">
            {!showPokemonSelection && (
              <button className="button is-danger" onClick={handleChangeButton}>
                Select Different Pokemon
              </button>
            )}
            {showPokemonSelection && (
              <article className="message is-danger">
                <div className="message-header">
                  <p>Select Pokemon</p>
                  <button
                    className="delete"
                    aria-label="cancel"
                    onClick={handleChangeButton}></button>
                </div>
                <div className="message-body">
                  <ul>
                    {listOfPokemon.map((el) => (
                      <li>
                        <a onClick={handleChangePokemon}>{el.name}</a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2">
                    {offset > 0 && (
                      <button
                        className="button is-small is-danger mx-2"
                        onClick={handlePrevButton}>
                        Prev
                      </button>
                    )}
                    {offset < totalPokemon && (
                      <button
                        className="button is-small is-danger mx-2"
                        onClick={handleNextButton}>
                        Next
                      </button>
                    )}
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <div className="column">
            <button className="button is-danger mx-2" onClick={handleButton}>
              Type Effectiveness
            </button>
            <button className="button is-danger mx-2" onClick={handleButton}>
              Overview
            </button>
          </div>
          {page === 'Type Effectiveness' &&
            selectedPokemon &&
            selectedPokemon.types.map((el) => (
              <TypeEffectiveness
                typeName={el.type.name}
                typeUrl={el.type.url}
              />
            ))}

          {page === 'Overview' && selectedPokemon && (
            <Overview selectedPokemon={selectedPokemon} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PokedexContent;
