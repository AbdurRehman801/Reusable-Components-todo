import React from "react";
import TodoList from "./todoList";
import "./todoList.css";

const Button = ({ styleClass, value, onClick }) => (
  <button className={styleClass} onClick={onClick}>
    {value}
  </button>
);

export default Button;
