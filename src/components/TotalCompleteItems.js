import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  let todos = useSelector((state) => state.todos);
  let totalCompleteItems = todos.filter(
    (todo) => todo.completed === true
  ).length;
  return <h4 className="mt-3">Total Complete Items: {totalCompleteItems}</h4>;
};

export default TotalCompleteItems;
