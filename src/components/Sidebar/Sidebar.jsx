import React from "react";
import { Calendar, CheckCircle } from "lucide-react";
import StatsCard from "./StatsCard";
import AddTaskForm from "./AddTaskForm";

const Sidebar = ({ stats, onAddTask }) => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Todo Dashboard
        </h1>
        <p className="text-gray-600">Manage your tasks efficiently</p>
      </div>

      {/* Stats Cards */}
      <div className="space-y-4 mb-8">
        <StatsCard
          title="Total Tasks"
          value={stats.total}
          icon={Calendar}
          color="blue"
        />
        <StatsCard
          title="Completed"
          value={stats.completed}
          icon={CheckCircle}
          color="green"
        />
        <StatsCard title="Pending" value={stats.pending} color="orange" />
      </div>

      {/* Add Task Form */}
      <AddTaskForm onAddTask={onAddTask} />
    </div>
  );
};

export default Sidebar;
