import React from "react";

const StatsCard = ({ title, value, icon: Icon, color = "blue" }) => {
  const colors = {
    blue: "text-blue-500",
    green: "text-green-500",
    orange: "text-orange-500",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-1">{title}</p>
          <p
            className={`text-2xl font-bold ${
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
          <div className="w-8 h-8 border-2 border-orange-500 rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
