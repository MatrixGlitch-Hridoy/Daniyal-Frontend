"use client";

const Button = ({ children, onClick, className, ...rest }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
