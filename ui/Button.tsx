import { ChangeEvent } from "react";

type ButtonTypes = {
  label: string;
  type?: "submit" | "reset" | "button";
  onChange?: (e: ChangeEvent<HTMLButtonElement>) => void;
};

export const Button = ({ label, type, onChange }: ButtonTypes) => {
  return (
    <button
      type={type}
      onChange={onChange}
      className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
    >
      {label}
    </button>
  );
};
