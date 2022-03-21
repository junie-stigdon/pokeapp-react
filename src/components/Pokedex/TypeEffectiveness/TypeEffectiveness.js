import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { handleError, handleResponse } from '../../../utils/api/apiUtils';
import typeColors from '../../../utils/constants/typeColors';

const TypeEffectiveness = ({ typeName, typeUrl }) => {
  const [typeEffect, setTypeEffect] = useState(null);
  const color = typeColors[typeName];

  useEffect(() => {
    axios
      .get(typeUrl)
      .then(handleResponse)
      .catch(handleError)
      .then((response) => {
        setTypeEffect({
          weakTo: response.data.damage_relations.double_damage_from.map(
            (el) => el.name
          ),
          superEffective: response.data.damage_relations.double_damage_to.map(
            (el) => el.name
          ),
          halfFrom: response.data.damage_relations.half_damage_from.map(
            (el) => el.name
          ),
          halfTo: response.data.damage_relations.half_damage_to.map(
            (el) => el.name
          ),
        });
      });
  }, []);

  return (
    <div className="card">
      {typeName && typeEffect ? (
        <div className="card-content">
          <div className="content">
            <div className={`tag is-large ${color} mb-3`}>{typeName}</div>
            <p>
              <b>Weak To:</b>{' '}
              {typeEffect.weakTo.map((el) => (
                <div className={`tag mr-2 ${typeColors[el]}`}>{el}</div>
              ))}
            </p>
            <p>
              <b>Super Effective Against:</b>{' '}
              {typeEffect.superEffective.map((el) => (
                <div className={`tag mr-2 ${typeColors[el]}`}>{el}</div>
              ))}
            </p>
            <p>
              <b>Half Damage From:</b>{' '}
              {typeEffect.halfFrom.map((el) => (
                <div className={`tag mr-2 ${typeColors[el]}`}>{el}</div>
              ))}
            </p>
            <p>
              <b>Half Damage To:</b>{' '}
              {typeEffect.halfTo.map((el) => (
                <div className={`tag mr-2 ${typeColors[el]}`}>{el}</div>
              ))}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TypeEffectiveness;
