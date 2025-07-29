import { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:3000/api";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/todos`);
      const data = await response.json();

      if (data.success) {
        setTodos(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch todos");
      console.error("Error fetching todos:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Add todo
  const addTodo = async (title, description) => {
    if (!title.trim()) return false;

    try {
      const response = await fetch(`${API_BASE_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setTodos((prev) => [data.data, ...prev]);
        return true;
      } else {
        setError(data.message);
        return false;
      }
    } catch (err) {
      setError("Failed to add todo");
      console.error("Error adding todo:", err);
      return false;
    }
  };

  // Update todo
  const updateTodo = async (id, updates) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });

      const data = await response.json();

      if (data.success) {
        setTodos((prev) =>
          prev.map((todo) => (todo._id === id ? data.data : todo))
        );
        return true;
      } else {
        setError(data.message);
        return false;
      }
    } catch (err) {
      setError("Failed to update todo");
      console.error("Error updating todo:", err);
      return false;
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        setTodos((prev) => prev.filter((todo) => todo._id !== id));
        return true;
      } else {
        setError(data.message);
        return false;
      }
    } catch (err) {
      setError("Failed to delete todo");
      console.error("Error deleting todo:", err);
      return false;
    }
  };

  // Get stats
  const getStats = () => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const pending = total - completed;

    return { total, completed, pending };
  };

  // Refresh todos
  const refreshTodos = () => {
    fetchTodos();
  };

  return {
    todos,
    loading,
    error,
    addTodo,
    updateTodo,
    deleteTodo,
    getStats,
    refreshTodos,
  };
};

export default useTodos;
