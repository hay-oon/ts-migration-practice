import { Link } from "react-router-dom";
import { ReactNode } from "react";
import "./NavMenu.css";

// Props의 타입 정의
interface NavMenuProps {
  children: ReactNode;
  isActive: boolean;
  to: string;
}

const NavMenu = ({ children, isActive, to }: NavMenuProps) => {
  return (
    <Link to={to} className={`navMenu ${isActive ? "active" : ""}`}>
      {children}
    </Link>
  );
};

export default NavMenu;
