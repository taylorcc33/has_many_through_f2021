import React from "react";

const TrainerNew = () => {
  return (
    <div>
      <h1>Add New Trainer:</h1>
      <br />

      <form action="/trainers" method="post">
        <input placeholder="Name" type="text" name="trainer[name]" />
        <input placeholder="Location" type="text" name="trainer[location]" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TrainerNew;
