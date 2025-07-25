import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button, Input } from "../UI";

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (onAddTask(title, description)) {
      setTitle("");
      setDescription("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="bg-gray-200 border border-gray-200 rounded-xl p-4">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Add New Task</h2>
      <p className="text-gray-600 text-sm mb-6">Create a new todo item</p>

      <div className="space-y-5">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          onKeyPress={handleKeyPress}
        />

        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          onKeyPress={handleKeyPress}
        />

        <Button onClick={handleSubmit} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default AddTaskForm;
