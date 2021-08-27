import React from "react";

const Trainer = (props) => {
  console.log(props.pokemons);

  const renderPokemon = () => {
    return props.pokemons.map((pokemon) => {
      return (
        <div key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <p>Level: {pokemon.level}</p>
          <p>Move: {pokemon.move}</p>
          <br />
        </div>
      );
    });
  };

  return (
    <div>
      <br />
      <a href="/">
        <button>Return Home</button>
      </a>
      <h1>Trainer Data:</h1>
      <br />
      <h2>{props.trainer.name}</h2>
      <p>Hometown: {props.trainer.location}</p>
      <br />
      <a href={`/trainers/${props.trainer.id}`} data-method="delete">
        <button>Delete Trainer</button>
      </a>
      <br />
      <br />
      {renderPokemon()}
    </div>
  );
};

export default Trainer;
