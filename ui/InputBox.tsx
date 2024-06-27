import { ChangeEvent } from "react";

type InputTypes = {
  id: string;
  label: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  autoComplete?: string;
};

export const InputBox = ({
  id,
  label,
  placeholder,
  onChange,
  type,
  autoComplete,
}: InputTypes) => {
  return (
    <div className="space-y-2">
      <label htmlFor="name" className="text-sm font-medium text-black">
        {label}
      </label>
      <input
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};
