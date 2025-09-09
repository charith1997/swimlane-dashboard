import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label?: string | React.ReactNode;
  className?: string;
}

function Button({ onClick, label, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={`cursor-pointer ${className}`}>
      {label}
    </button>
  );
}

export default Button;
