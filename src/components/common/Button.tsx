import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={`button ${props.className || ""}`}>
      {children}
    </button>
  );
};

export default Button;
