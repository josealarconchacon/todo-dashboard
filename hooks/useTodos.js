import { useState } from "react";
import { getCurrentDate } from "../utils/dateUtils";

const useTodos = () => {
  // State to hold todo items
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete project proposal",
      description: "Finish the Q4 project proposal for the client meeting",
      completed: true,
      completedDate: "1/14/2024",
    },
    {
      id: 2,
      title: "Review code changes",
      description: "Review and approve the latest pull requests",
      completed: false,
      createdDate: "1/13/2024",
    },
  ]);

  // add todo
  const addTodo = (title, description) => {
    if (title.trim()) {
      const addNewTodo = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        completed: false,
        createdDate: getCurrentDate(),
      };
      setTodos((prev) => [...prev, addNewTodo]);
      return true;
    }
    return false;
  };

  // update todo
  const updateTodo = (id, updates) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, ...updates };
          if (updates.completed && !todo.completed) {
            updatedTodo.completedDate = getCurrentDate();
          }
          return updatedTodo;
        }
        return todo;
      })
    );
  };

  // delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const getStats = () => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const pending = total - completed;

    return { total, completed, pending };
  };

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    getStats,
  };
};

export default useTodos;
