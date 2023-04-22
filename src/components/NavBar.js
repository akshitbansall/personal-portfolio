import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import Contact from "./contact";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inlin-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : " w-0"
          }`}
      ></span>
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full gap-16 px-32 py-1 font-medium flex items-center justify-between bg-dark text-light text-sm fixed pb-3 pt-5 z-20">
      <nav className="flex-1">
        <CustomLink
          href="/"
          title="AB"
          className="ml-4 text-bold font-bold no-underline text-2xl hover:text-myYellow"
        />
      </nav>
      <nav className="hidden md:flex flex-1 justify-center">
        <CustomLink
          href="/"
          title="Home"
          className="mr-4  hover:text-myYellow"
        />
        <CustomLink
          href="/projects"
          title="Projects"
          className="mx-4  hover:text-myYellow"
        />
        <CustomLink
          href="/resume"
          title="Resume"
          className="ml-4  hover:text-myYellow"
        />
      </nav>
      <nav className="hidden md:flex flex-1 justify-end">
        <Contact />
      </nav>
      <nav className="flex items-center justify-center flex-wrap md:hidden">
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleHamburgerClick}
          width={18}
          height={15}
          strokeWidth={2}
          rotate={0}
          color="#fff"
          borderRadius={0}
          animationDuration={0.2}
          className={`md:hidden ${isOpen ? "absolute z-20" : "relative"}`}
        />
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-dark bg-opacity-90 flex flex-col items-center justify-center z-10 ${isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
            } transition-all duration-200`}
        >
          <CustomLink
            href="/"
            title="Home"
            className="text-light hover:text-accent  hover:text-myYellow  my-4"
            onClick={handleLinkClick}
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="text-light hover:text-accent  hover:text-myYellow my-4"
            onClick={handleLinkClick}
          />
          <CustomLink
            href="/resume"
            title="Resume"
            className="text-light hover:text-accent  hover:text-myYellow my-4"
            onClick={handleLinkClick}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
