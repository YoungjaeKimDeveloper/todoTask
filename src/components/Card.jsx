import React from "react";
import "./Card.css";
import Tag from "./Tag";
import deleteIcon from "../assets/img/delete.png";

const Card = ({ data, handleDelete, index }) => {
  return (
    <div className="card_container">
      <p className="title">{data.tasks}</p>
      <div className="card_container_bottom">
        <div className="card_container_bottom_left">
          {data.tags &&
            data.tags.map((value, index) => (
              <Tag key={index} name={value} isSelected />
            ))}
        </div>
        <div className="card_container_bottom_right"></div>
        <button
          className="deleteIcon"
          onClick={() => {
            handleDelete(index);
          }}
        >
          <img src={deleteIcon} alt="delete" className="deleteIcon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
