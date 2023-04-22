import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

const Footer = () => {
  const textAnimation = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0, transform: "translateX(-100%)" },
    delay: 500,
  });

  const iconAnimation = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(100%)" },
    delay: 500,
  });

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-dark py-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-0">
        <nav className="mb-8 lg:mb-0 ">
          <ul className="flex flex-wrap space-x-4 text-white order-1">
            <motion.li whileHover={{ scale: 1.1 }}>
              Developed by 	&copy; Akshit Bansal
            </motion.li>
          </ul>
        </nav>

        <div className="flex flex-col lg:flex-row items-center  justify-center  lg:justify-between order-2">
          <animated.p
            style={textAnimation}
            className="text-gray-400  self-center lg:ml-6 mb-8 lg:mb-0 text-lg lg:mt-0"
          >
            Made with <span className=""> &#128155;</span>
          </animated.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center  justify-center lg:justify-between order-3">
          <div className="flex flex-wrap lg:flex-nowrap lg:justify-end space-x-4 lg:space-x-6 text-white hover:cursor-pointer">
            <motion.a whileHover={{ scale: 1.5 }} href="https://www.linkedin.com/in/akshit-bansal-404952227/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white hover:text-myYellow transition-colors duration-300"
              />
            </motion.a>
            <motion.a whileHover={{ scale: 1.5 }} href="https://twitter.com/akshiitbansal" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white hover:text-myYellow transition-colors duration-300"
              />
            </motion.a>
            <motion.a whileHover={{ scale: 1.5 }} href="https://www.instagram.com/desii.thoughts/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white hover:text-myYellow transition-colors duration-300"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
