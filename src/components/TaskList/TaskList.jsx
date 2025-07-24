import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ todos, onUpdateTodo, onDeleteTodo, pendingCount }) => {
  return (
    <div className="flex-1 bg-white p-10">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Tasks</h2>
          <p className="text-gray-600 text-base">
            You have {pendingCount} pending task{pendingCount !== 1 ? "s" : ""}{" "}
            to complete
          </p>
        </div>

        <div className="space-y-5">
          {todos.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
              <p className="text-gray-500">
                No tasks yet. Add your first task to get started!
              </p>
            </div>
          ) : (
            todos.map((todo) => (
              <TaskItem
                key={todo.id}
                todo={todo}
                onUpdate={onUpdateTodo}
                onDelete={onDeleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
