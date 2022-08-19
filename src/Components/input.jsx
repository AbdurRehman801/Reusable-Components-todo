import React, { useState } from "react";
import "./todoList.css";

const Input = ({ inputStyle, onChange, value }) => (
  <input type="text" className={inputStyle} maxLength="50" onChange={onChange} value={value} />
);

export default Input;
