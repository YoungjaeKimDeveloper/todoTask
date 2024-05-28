import React, { useState } from "react";
import "./Header.css";
import Tag from "./Tag";
import Card from "./Card";

const Header = ({ setData, data }) => {
  const [tasks, setTasks] = useState({
    tasks: "",
    status: "todo",
    tags: [],
  });

  const handleTask = (event) => {
    const { name, value } = event.target;
    setTasks((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleTag = (tag) => {
    if (tasks.tags.some((value) => value == tag)) {
      const filteredTag = tasks.tags.filter((value) => value !== tag);
      setTasks((prev) => ({
        ...prev,
        tags: filteredTag,
      }));
    } else {
      setTasks((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };
  console.log(tasks.tags);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => {
      return [...prev, tasks];
    });
    setTasks({
      tasks: "",
      status: "todo",
      tags: [],
    });
  };

  const isSelected = (tag) => {
    return tasks.tags.some((value) => value == tag);
  };

  return (
    <div className="header_container">
      <div className="header_top">
        <input
          type="text"
          onChange={handleTask}
          name="tasks"
          value={tasks.tasks}
        />
      </div>
      <div className="header_bottom">
        <div className="header_bottom_left">
          <Tag
            name={"HTML"}
            handleTag={handleTag}
            isSelected={isSelected("HTML")}
          />
          <Tag
            name={"CSS"}
            handleTag={handleTag}
            isSelected={isSelected("CSS")}
          />
          <Tag
            name={"Javascript"}
            handleTag={handleTag}
            isSelected={isSelected("Javascript")}
          />
          <Tag
            name={"React"}
            handleTag={handleTag}
            isSelected={isSelected("React")}
          />
        </div>
        <div className="header_bottom_right">
          <select onChange={handleTask} name="status" value={tasks.status}>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button onClick={handleSubmit}>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
