import { Link } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { HamburgerMenu } from "./design/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "../assets/svg/MenuSvg";

function Header() {
  const pathname = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      enablePageScroll();
    } else {
      setIsOpen(true);
      disablePageScroll();
    }
  };

  const handleLinkClick = () => {
    if (!isOpen) return;
    enablePageScroll();
    setIsOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 z-[60] w-full border-b border-n-6 bg-n-8 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <Link to={"#hero"} className="w-[12rem] xl:mr-8">
          <img src={brainwave} alt="brainwave logo" width={190} height={40} />
        </Link>
        {/* Nav Links */}
        <nav
          className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent ${
            isOpen ? "flex" : "hidden lg:flex"
          }`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleLinkClick}
                className={`block relative font-code text-2xl lg:text-xs uppercase text-n-1 lg:text-n-1/50 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <Link
          to={"#signup"}
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </Link>
        <Button href={"#login"} className={" hidden lg:flex"}>
          Sign In
        </Button>
        <Button
          className={"ml-auto lg:hidden"}
          px={"px-3"}
          onClick={toggleMenu}
        >
          <MenuSvg openNavigation={isOpen} />
        </Button>
      </div>
    </header>
  );
}

export default Header;
