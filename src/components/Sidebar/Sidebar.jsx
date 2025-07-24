import React from "react";
import { Calendar, CheckCircle } from "lucide-react";
import StatsCard from "./StatsCard";
import AddTaskForm from "./AddTaskForm";

const Sidebar = ({ stats, onAddTask }) => {
  return (
    <div className="w-80 bg-gray-100 border-r border-gray-200 p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Todo Dashboard
        </h1>
        <p className="text-gray-600 text-base">Manage your tasks efficiently</p>
      </div>

      {/* Stats Cards */}
      <div className="space-y-5 mb-10">
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
