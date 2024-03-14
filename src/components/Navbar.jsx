import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";
import { Link } from "react-scroll";
import { Button } from "./Button";
import { SideBar } from "./SideBar";

export const Navbar = () => {
  const isLargeScreen = useMediaQuery("(min-width: 864px)");
  const isShortScreen = useMediaQuery("(max-width: 864px)");
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsActive(false);
    setShowMenu(false);
  };

  return (
    <div className="flex fixed top-0 shadow-md w-screen z-50 bg-transparent backdrop-blur-md madimi-one-regular">
      <nav
        className={`h-16 flex justify-between w-screen text-gray-950 ${
          showMenu ? "hidden" : "flex"
        }`}
      >
        <div className="flex justify-center items-center">
          <Link
            spy={true}
            smooth={true}
            duration={1000}
            to="landing"
            offset={-64}
            onClick={handleLinkClick}
          >
            <h1 className="text-4xl mx-5 cursor-pointer">Kenitos</h1>
          </Link>
        </div>
        {isLargeScreen && (
          <span className="flex items-center mr-10">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="nosotros"
              className="transition-transform duration-200 hover:scale-110 mr-5 cursor-pointer"
              offset={-64}
            >
              Sobre Nosotros
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="products"
              className="transition-transform duration-200 hover:scale-110 mr-5 cursor-pointer"
              offset={-64}
            >
              Productos
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="contacto"
              className="transition-transform duration-200 hover:scale-110 mr-5 cursor-pointer"
              offset={-64}
            >
              Contactanos
            </Link>
          </span>
        )}
      </nav>
      {isShortScreen && (
        <div className={`${isActive ? "w-screen" : ""}`}>
          <Button isActive={isActive} toggleActive={toggleActive} />
          <div className={`${isActive ? "" : "hidden"}`}>
            <SideBar handleLinkClick={handleLinkClick} />
          </div>
        </div>
      )}
    </div>
  );
};
