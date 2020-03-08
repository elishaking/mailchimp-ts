import React from "react";
import "./TextField.scss";

interface TextFieldProps {
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function TextField({
  type,
  name,
  placeholder,
  value,
  onChange,
  error
}: TextFieldProps) {
  return (
    <div className="text-field">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
