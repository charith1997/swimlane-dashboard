import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  classname?: string;
}

function Button({ onClick, label, classname }: ButtonProps) {
  return (
    <button onClick={onClick} className={classname}>
      {label}
    </button>
  );
}

export default Button;
