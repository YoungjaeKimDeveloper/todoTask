import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Bottom from "./components/Bottom";
import "./App.css";

const App = () => {
  const getStorage = localStorage.getItem("tasks");
  const initialDate = getStorage ? JSON.parse(getStorage) : [];

  const [data, setData] = useState(initialDate);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);
  // Delete Function
  const handleDelete = (number) => {
    const newData = data.filter((task, index) => index !== number);
    setData(newData);
  };
  // Track the task by using useEffect

  console.log(data);
  console.log("Here is the information " + data.status);
  return (
    <div className="container">
      <Header setData={setData} data={data} />
      <Bottom data={data} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
