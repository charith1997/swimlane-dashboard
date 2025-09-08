import React from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number";
}

function Input({ value, onChange, type }: InputProps) {
  return <input type={type || "text"} value={value} onChange={onChange} />;
}

export default Input;
