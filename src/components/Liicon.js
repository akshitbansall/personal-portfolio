import React from "react";
import { motion, useScroll } from "framer-motion";

const Liicon = ({ referance }) => {
  const { scrollYProgress } = useScroll({
    target: referance,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="75"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="75"
          r="20"
          className=" stroke-[5px] fill-light"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="75"
          r="10"
          className="animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};

export default Liicon;

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleHamburgerClick = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = () => {
//         setIsOpen(false);
//     };

//     const handleCloseClick = () => {
//         setIsOpen(false);
//     };

//     return (
//         <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-dark text-light text-sm">
//             <nav>
//                 <CustomLink
//                     href="/"
//                     title="AB"
//                     className="ml-4 text-bold font-bold no-underline text-2xl"
//                 />
//             </nav>
//             <nav className="hidden md:flex">
//                 <CustomLink href="/" title="Home" className="mr-4" />
//                 <CustomLink href="/about" title="About" className="mx-4" />
//                 <CustomLink href="/projects" title="Projects" className="mx-4" />
//                 <CustomLink href="/resume" title="Resume" className="ml-4" />
//             </nav>
//             <nav className="hidden md:flex ml-auto">
//                 <a
//                     role="button"
//                     className="font-b bg-light text-dark hover:bg-[#ffc552] hover:text-dark text-sm px-4 py-2 rounded-full my-4"
//                     href="#"
//                 >
//                     Contact
//                 </a>
//             </nav>
//             <nav className="flex items-center justify-center flex-wrap">
//                 <HamburgerMenu
//                     isOpen={isOpen}
//                     menuClicked={handleHamburgerClick}
//                     width={18}
//                     height={15}
//                     strokeWidth={2}
//                     rotate={0}
//                     color="#fff"
//                     borderRadius={0}
//                     animationDuration={0.2}
//                     className="md:hidden"
//                 />
//                 <div
//                     className={`fixed top-0 left-0 right-0 bottom-0 bg-dark bg-opacity-90 flex flex-col items-center justify-center z-10 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//                         } transition-all duration-200`}
//                 >
//                     <CustomLink
//                         href="/"
//                         title="Home"
//                         className="text-light hover:text-accent my-4"
//                         onClick={handleLinkClick}
//                     />
//                     <CustomLink
//                         href="/about"
//                         title="About"
//                         className="text-light hover:text-accent my-4"
//                         onClick={handleLinkClick}
//                     />
//                     <CustomLink
//                         href="/projects"
//                         title="Projects"
//                         className="text-light hover:text-accent my-4"
//                         onClick={handleLinkClick}
//                     />
//                     <CustomLink
//                         href="/resume"
//                         title="Resume"
//                         className="text-light hover:text-accent my-4"
//                         onClick={handleLinkClick}
//                     />
//                     <a
//                         role="button"
//                         className="font-b bg-light text-dark hover:bg-[#ffc552] hover:text-dark text-sm px-4 py-2 rounded-full my-4"
//                         href="#"
//                     >
//                         Contact
//                     </a>
//                     <CustomLink
//                         href="#"
//                         title="Close"
//                         className="text-light hover:text-accent my-4 z-20 relative" // add "relative" class
//                         onClick={handleCloseClick}
//                         style={{ zIndex: isOpen ? 1 : -1 }} // add inline style to set z-index
//                     />
//                 </div>
//             </nav>
//         </header


// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleHamburgerClick = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = () => {
//         setIsOpen(false);
//     };

//     const handleCloseClick = () => {
//         setIsOpen(false);
//     };

//     return (
//         <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-dark text-light text-sm">
//             <nav>
//                 <CustomLink
//                     href="/"
//                     title="AB"
//                     className="ml-4 text-bold font-bold no-underline text-2xl"
//                 />
//             </nav>
//             <nav className="hidden md:flex">
//                 <CustomLink href="/" title="Home" className="mr-4" />
//                 <CustomLink href="/about" title="About" className="mx-4" />
//                 <CustomLink href="/projects" title="Projects" className="mx-4" />
//                 <CustomLink href="/resume" title="Resume" className="ml-4" />
//             </nav>
//             <nav className="hidden md:flex ml-auto">
//                 <a
//                     role="button"
//                     className="font-b bg-light text-dark hover:bg-[#ffc552] hover:text-dark text-sm px-4 py-2 rounded-full my-4"
//                     href="#"
//                 >
//                     Contact
//                 </a>
//             </nav>
//             <nav className="flex items-center justify-center flex-wrap">
//                 <HamburgerMenu
//                     isOpen={isOpen}
//                     menuClicked={handleHamburgerClick}
//                     width={18}
//                     height={15}
//                     strokeWidth={2}
//                     rotate={0}
//                     color="#fff"
//                     borderRadius={0}
//                     animationDuration={0.2}
//                     className="md:hidden"
//                 />
//                 <div
//                     className={`fixed top-0 left-0 right-0 bottom-0 bg-dark bg-opacity-90 flex flex-col items-center justify-center z-10 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//                         } transition-all duration-200`}
//                 >
//                     <CustomLink
//                         href="/"
//                         title="Home"
//                         className="text-light hover:text-accent my-4"
//                         onClick={handleLinkClick}
//                     />
//                     <CustomLink
//                         href="/about"
//                         title="About"
//                         className="text-light hover:text-accent my-4"
//                         onClick={handleLinkClick}
//                     />
//                     <CustomLink
//                         href="/projects"
//                         title="Projects"
//                         className="text-light hover:text-accent my-4"
//                         onClick={handleLinkClick}
//                     />
//                     <CustomLink
//                         href="/resume"
//                         title="Resume"
//                         className="text-light hover:text-accent my-4"
//                         onClick={handleLinkClick}
//                     />
//                     <a
//                         role="button"
//                         className="font-b bg-light text-dark hover:bg-[#ffc552] hover:text-dark text-sm px-4 py-2 rounded-full my-4"
//                         href="#"
//                     >
//                         Contact
//                     </a>
//                     <CustomLink
//                         href="#"
//                         title="Close"
//                         className="text-light hover:text-accent my-4 z-20 relative" // add "relative" class
//                         onClick={handleCloseClick}
//                         style={{ zIndex: isOpen ? 1 : -1 }} // add inline style to set z-index
//                     />
//                 </div>
//             </nav>
//         </header
