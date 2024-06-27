"use client";

import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
