import React from "react";
import "./Column.css";
import Card from "./Card";

const Column = ({ title, img, data, status, handleDelete }) => {
  return (
    <div className="column">
      <div className="column_header">
        <img src={img} alt={title} className="img" />
        <p>{title}</p>
      </div>
      {data.map(
        (value, index) =>
          value.status === status && (
            <Card
              key={index}
              data={value}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </div>
  );
};

export default Column;
