import React from "react";

const Input = ({
  placeholder,
  value,
  onChange,
  onKeyPress,
  className = "",
  ...props
}) => {
  const baseClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base bg-white";

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
};

export default Input;
