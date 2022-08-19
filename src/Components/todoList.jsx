import React, { useEffect, useState } from "react";
import Button from "./button";
import Input from "./input";
import List from "./list";
import "./todoList.css";
const inLocalStorage = () =>{
  let inLocal = localStorage.getItem("list")
  if(inLocal){
    return JSON.parse(localStorage.getItem("list")) 
  }else{
    return [];
  }
}
function TodoList({ ids }) {
  // console.log(props, "props")
  const [inputList, setInputList] = useState();
  const [todos, setTodos] = useState(inLocalStorage());
  const [toggle, setToggle] = useState(true);
  const [updateId, setUpdateId] = useState(null);

  const handleChange = (e) => {
    console.log(e, "handleChange");
    setInputList(e.target.value);
  };

  const addingFunction = () => {
    if (!inputList) {
      alert("Please Write Something in todo");
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputList,
      };
      setTodos([...todos, allInputData]);
      setInputList("");
    }
  };
  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(todos))
  }, [todos])

  const deleteFunction = (id) => {
    // console.log(index, "deleted");
    const deletedItems = todos.filter((arr) => {
      return id !== arr.id;
    });
    setTodos(deletedItems);
  };
  const EditFunction = (id) => {
    // setInputList(value);
    let editVar = todos.find((editVal, index) => {
      return editVal.id === id;
    });
    setToggle(false);
    setInputList(editVar.name);
    setUpdateId(id);
  };
  const updateFunction = () =>{
    setTodos(
      todos.map((updateVal, index) => {
        if (updateVal.id === updateId) {
          return { ...todos, name: inputList };
        }
        return updateVal;
      })
    );
    setToggle(true);
    setInputList("");
    setUpdateId(null);
  }
  const removeAllFunction = ()=>{
    setTodos([]);
  }

  return (
    <>
      <div className="main-div">
        <div className="todo-List-heading-div">
          <h1>Todo List</h1>
        </div>
        <div className="todo-list-container">
          <div className="inputList-and-button-div">
            <Input
              onChange={handleChange}
              value={inputList}
              inputStyle="inputList"
            />

            {toggle ? (
              <Button
                onClick={addingFunction}
                value="Add"
                styleClass="add-button"
              />
            ) : (
              <Button
                value="Update"
                onClick={updateFunction}
                styleClass="add-button"
              />
            )}
          </div>
          {todos.map((value) => {
            return (
              <List
                itemVal={value.name}
                id={value.id}
                onSelect={() => deleteFunction(value.id)}
                onEdit={() => EditFunction(value.id)}
              />
            );
          })}
          <div className="removeAllDiv">
          <Button value="Remove All" styleClass="removeAllButton" onClick={removeAllFunction}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
