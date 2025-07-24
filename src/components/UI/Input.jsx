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
    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm";

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
