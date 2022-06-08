import { Link } from "react-router-dom";
import logo from "../../logo.png";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
function Header() {
  //Menu state
  const [menuOpen, setMenuOpen] = useState(false);

  //Change menu state
  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };
  //If the width become more than 768px, close the menu and set the state to false
  const windowSizeChecker = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", windowSizeChecker);
    //cleanup function
    return () => {
      window.removeEventListener("resize", windowSizeChecker);
    };
  }, []);
  return (
    <>
      <nav className="flex flex-row justify-between bg-violet-400 h-16 items-center">
        {/* Logo */}
        <Link to="/" className="flex space-x-2 items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 ml-10" />
          <h1 className="font-bold text-xl">Tinify</h1>
        </Link>

        {menuOpen ? (
          // Close Icon
          <XIcon
            className="h10 w-10 hover:cursor-pointer md:hidden mr-10"
            onClick={menuHandler}
          />
        ) : (
          // Open Icon
          <MenuIcon
            className="h10 w-10 hover:cursor-pointer md:hidden mr-10"
            onClick={menuHandler}
          />
        )}

        {/* Desktop Links */}
        {!menuOpen && (
          <div className="hidden md:flex flex-row mr-12 items-center space-x-4">
            <Link to="/" className="font-bold hover:text-white ">
              Home
            </Link>
            {/* <Link to="about" className="font-bold hover:text-white">
              About
            </Link> */}
            <a href="https://github.com/mohamedk98/tinify-io" target={"_blank"} rel="noreferrer">
              <button className="bg-transparent  rounded-lg border-2 border-black p-2 font-bold hover:bg-black hover:text-white flex items-center">
                <FaGithub className="mr-2" />
                Github Repo
              </button>{" "}
            </a>
          </div>
        )}
        {/* Desktop Links */}

        {/* Mobile Links */}
        {menuOpen && (
          <div className="flex flex-col absolute bg-violet-400 top-16 w-full space-y-2 pt-5 ">
            <Link to="/" className="font-bold ml-10 hover:text-white">
              Home
            </Link>
            {/* <Link to="about" className="font-bold ml-10 hover:text-white">
              About
            </Link> */}
            <a href="https://github.com/mohamedk98/tinify-io" target={"_blank"} rel="noreferrer">
              <button className="bg-transparent  rounded-lg border-2 border-black py-2 px-5 font-bold hover:bg-black hover:text-white flex items-center w-1/4 sm:w-32">
                <FaGithub className="mr-2" />
                Github
              </button>
            </a>
          </div>
        )}
        {/* Mobile Links */}
      </nav>
    </>
  );
}

export default Header;
