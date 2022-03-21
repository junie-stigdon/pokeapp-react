const Overview = ({ selectedPokemon }) => {
  return (
    <div className="card">
      {selectedPokemon ? (
        <div className="card-content">
          <div className="content">
            <h2>Overview</h2>
            <p>
              <b>Pokedex #:</b> {selectedPokemon.id}
            </p>
            <p>
              <b>Name:</b> {selectedPokemon.name}
            </p>
            <p>
              <b>Base Experience:</b> {selectedPokemon.base_experience}
            </p>
            <p>
              <b>Height:</b> {selectedPokemon.height}
            </p>
            <p>
              <b>Weight:</b> {selectedPokemon.weight}
            </p>

            <h2>Stats</h2>
            <p>
              <b>HP:</b> {selectedPokemon.stats[0].base_stat}
            </p>
            <p>
              <b>Attack:</b> {selectedPokemon.stats[1].base_stat}
            </p>
            <p>
              <b>Defense:</b> {selectedPokemon.stats[2].base_stat}
            </p>
            <p>
              <b>Special Attack:</b> {selectedPokemon.stats[3].base_stat}
            </p>
            <p>
              <b>Special Defense:</b> {selectedPokemon.stats[4].base_stat}
            </p>
            <p>
              <b>Speed:</b> {selectedPokemon.stats[5].base_stat}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Overview;
