import React from "react";
import { Clock } from "lucide-react";

const StatsCard = ({ title, value, icon: Icon, color = "blue" }) => {
  const colors = {
    blue: "text-blue-600",
    green: "text-green-600",
    orange: "text-orange-500",
  };

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
          <p
            className={`text-3xl font-bold ${
              color === "green"
                ? "text-green-600"
                : color === "orange"
                ? "text-orange-600"
                : "text-gray-900"
            }`}
          >
            {value}
          </p>
        </div>
        {Icon && <Icon className={`h-8 w-8 ${colors[color]}`} />}
        {!Icon && color === "orange" && (
          <Clock className="h-8 w-8 text-orange-500" />
        )}
      </div>
    </div>
  );
};

export default StatsCard;
