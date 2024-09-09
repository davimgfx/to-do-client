import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'normal' | 'full';
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} >
      {children}
    </button>
  );
}
