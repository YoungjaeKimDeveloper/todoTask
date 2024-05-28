import React from "react";
import "./Tag.css";
const Tag = ({ name, handleTag, isSelected }) => {
  const styleColor = {
    HTML: { backgroundColor: "#fc7005" },
    CSS: { backgroundColor: "#0917d9" },
    Javascript: { backgroundColor: "#ebe307" },
    React: { backgroundColor: "#07dfeb" },
    default: { backgroundColor: "#f2dfd0" },
  };
  return (
    <button
      className="tag"
      onClick={() => {
        handleTag(name);
      }}
      style={isSelected ? styleColor[name] : styleColor["default"]}
    >
      {name}
    </button>
  );
};

export default Tag;
