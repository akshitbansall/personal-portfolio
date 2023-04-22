// import React, { useRef } from "react";
// import { useScroll, motion } from "framer-motion";
// import Liicon from "./Liicon";

// const Details = ({ position }) => {
//     const ref = useRef(null);
//     return (
//         <li
//             ref={ref}
//             className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
//         >
//             <Liicon referance={ref} />
//             <div>
//                 <h3 className="capitalize font-bold text-2xl">{position}&nbsp; </h3>
//             </div>
//         </li>
//     );
// };

// const Experiance = () => {
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,com
//         offset: ["start end", "center start"],
//     });

//     return (
//         <div className="my-64">
//             <h2 className="font-bold text-8xl mb-32 w-full text-center">
//                 {" "}
//                 Education
//             </h2>

//             <div ref={ref} className="w-[75%] mx-auto relative">
//                 <motion.div
//                     style={{ scaleY: scrollYProgress }}
//                     className="absolute left-[3.37rem] top-0 w-[4px] h-full bg-dark origin-top"
//                 />

//                 <ul className="w-full flex flex-col items-start justify-between">
//                     <Details position="HTML" />
//                     <Details position="CSS" />
//                     <Details position="ReactJs" />
//                     <Details position="NextJs" />
//                     <Details position="Tailwind CSS" />
//                     <Details position="Mongo DB" />
//                     <Details position="Figma" />
//                     <Details position="Canva" />
//                     <Details position="ExpressJs" />
//                     <Details position="NodeJs" />
//                     <Details position="JavaScript" />
                    
                   
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Experiance;







