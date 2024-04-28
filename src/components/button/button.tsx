"use client";

import { useFormStatus } from "react-dom";
import { Spinner } from "../loading/spinner";

interface ButtonProps {
  children: any;
  style?: string;
  loadingStyle?: string;
  submitting?: boolean;
}

export function Button({
  children,
  style,
  loadingStyle,
  submitting,
}: ButtonProps) {
  return (
    <button
      type="submit"
      className={
        style
          ? style
          : `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
      }
      disabled={submitting}
    >
      {submitting ? <Spinner style={loadingStyle} /> : children}
    </button>
  );
}
