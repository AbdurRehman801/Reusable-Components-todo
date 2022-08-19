import React from "react";
import Button from "./button";
import "./todoList.css";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";


function List({itemVal, id, onSelect, onEdit}) {  
  return (
    <>
      <ul className="list-making-todo">
      <li key={id}>
            {itemVal}
            <Button
            styleClass="EditButton"
            value={<BiEdit/>}
            onClick={onEdit}

            />
              <Button
                styleClass="deleteButton"
                value={<AiFillDelete />}
                onClick={onSelect}
              />
            </li>
      </ul>
    </>
  );
}

export default List;
