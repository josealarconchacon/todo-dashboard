import React, { useState } from "react";
import { Check, Edit, Trash2 } from "lucide-react";
import { Button, Input } from "../UI";

const TaskItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleSave = () => {
    onUpdate(todo.id, {
      title: editTitle.trim(),
      description: editDescription.trim(),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setIsEditing(false);
  };

  const toggleComplete = () => {
    onUpdate(todo.id, { completed: !todo.completed });
  };

  if (isEditing) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="space-y-5">
          <Input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSave()}
          />
          <Input
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Description (optional)"
          />
          <div className="flex space-x-3">
            <Button onClick={handleSave} variant="success" size="sm">
              Save
            </Button>
            <Button onClick={handleCancel} variant="secondary" size="sm">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          <div className="mt-1">
            {todo.completed ? (
              <div
                className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center cursor-pointer"
                onClick={toggleComplete}
              >
                <Check className="h-3 w-3 text-white" />
              </div>
            ) : (
              <div
                className="w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer hover:border-green-500 transition-colors"
                onClick={toggleComplete}
              ></div>
            )}
          </div>
          <div className="flex-1">
            <h3
              className={`font-bold text-lg mb-2 ${
                todo.completed ? "line-through text-gray-500" : "text-gray-900"
              }`}
            >
              {todo.title}
            </h3>
            {todo.description && (
              <p
                className={`text-base ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {todo.description}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <div className="flex items-center space-x-3">
            {todo.completed ? (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                Completed
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                Pending
              </span>
            )}
            <span className="text-sm text-gray-500">
              {todo.completed && todo.completedDate
                ? todo.completedDate
                : todo.createdDate}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
