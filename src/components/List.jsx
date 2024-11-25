import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const List = () => {
  //* bir reducer'da tutulan state3e abone olma
  const todoState = useSelector((store) => store.todoReducer);

  return (
    <div>
      {todoState.todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
