import React from "react";
import Column from "./Column";
import "./Bottom.css";
import tood from "../assets/img/direct-hit.png";
import doing from "../assets/img/fire.png";
import done from "../assets/img/check.png";
const Bottom = ({ data, handleDelete }) => {
  console.log("I am here");
  console.log(data.status);
  return (
    <div className="column-container">
      <Column
        className="column"
        title="Todo"
        img={tood}
        data={data}
        status="todo"
        handleDelete={handleDelete}
      />
      <Column
        className="column"
        title="Doing"
        img={doing}
        data={data}
        status="doing"
        handleDelete={handleDelete}
      />
      <Column
        className="column"
        title="Done"
        img={done}
        data={data}
        status="done"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Bottom;
