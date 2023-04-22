import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Liicon from "./Liicon";

const Details = ({ position, company, companyLink }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-row items-center justify-between"
    >
      <Liicon referance={ref} />
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        {" "}
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[3.37rem] top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
