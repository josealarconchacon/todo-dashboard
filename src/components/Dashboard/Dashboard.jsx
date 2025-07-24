import React from "react";
import { Sidebar } from "../Sidebar";
import { TaskList } from "../TaskList";
import useTodos from "../../../hooks/useTodos";

const Dashboard = () => {
  const { todos, addTodo, updateTodo, deleteTodo, getStats } = useTodos();
  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar stats={stats} onAddTask={addTodo} />
      <TaskList
        todos={todos}
        onUpdateTodo={updateTodo}
        onDeleteTodo={deleteTodo}
        pendingCount={stats.pending}
      />
    </div>
  );
};

export default Dashboard;
