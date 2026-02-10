import { ReactNode } from "react";

interface TextTransitionProps {
  children?: ReactNode;
  text?: string;
  className?: string;
}

export function TextTransition({ children, text, className = "" }: TextTransitionProps) {
  return (
    <span className={`text-content ${className}`}>
      {text || children}
    </span>
  );
}