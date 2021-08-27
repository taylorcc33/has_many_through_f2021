import React from "react";

const Trainers = (props) => {
  console.log(props.trainers);

  const renderTrainers = () => {
    return props.trainers.map((trainer) => {
      return (
        <div key={trainer.id}>
          <a href={`/trainers/${trainer.id}`}>
            <h2>{trainer.name}</h2>
          </a>
          <br />
        </div>
      );
    });
  };

  return (
    <>
      <br />
      <a href="/">
        <button>Return Home</button>
      </a>
      <h1>Trainers</h1>
      <br />
      <a href="http://localhost:3000/trainers/new">
        <button>Add New Trainer</button>
      </a>
      <br />
      <br />
      {renderTrainers()}
    </>
  );
};

export default Trainers;
