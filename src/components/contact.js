import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[5px] inlin-block bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : " w-0"
                    }`}
            ></span>
        </Link>
    );
};

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 120,
                damping: 20,
            },
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 120,
                damping: 20,
            },
        },
    };

    return (
        <>
            <button
                className="bg-[#1370f2] font-semibold text-white text-xs lg:text-sm py-2 px-4 hover:bg-blue-700 rounded-full my-4"
                onClick={handleOpen}
            >
                Get in touch
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="m-10 fixed top-0 left-0 right-0 bottom-0 bg-light z-10 flex flex-col justify-center items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* <div className="bg-black bg-opacity-10 transform translate-y-96 -skew-y-12 absolute top-0 left-0 right-0" style={{ bottom: "50%", zIndex: "-1" }}></div> */}
                        <div class="bg-black bg-opacity-[0.05]  absolute top-0 left-0 right-0 bottom-0   clip-polygon"></div>

                        <h2 className="text-2xl text-dark font-medium mb-7">Contact Us</h2>
                        <button onClick={handleClose} className="absolute top-5 right-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-gray-500 hover:text-gray-700 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <p className="text-lg">
                            <CustomLink
                                href="mailto:akshitmoga1@gmail.com"
                                title="akshitmoga1@gmail.com"
                                className="text-dark font-bold text-4xl sm:text-5xl md:text-5xl "
                            />
                        </p>
                        <div className="absolute bottom-9 left-0 right-0 flex justify-center">
                            <motion.a whileHover={{ scale: 1.2 }}>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className="text-dark hover:text-myYellow transition-colors duration-300 h-5 w-5 mx-3 cursor-pointer"
                                />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }}>
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="text-dark hover:text-myYellow transition-colors duration-300 h-5 w-5 mx-3 cursor-pointer"
                                />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }}>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="text-dark hover:text-myYellow transition-colors duration-300 h-5 w-5 mx-3 cursor-pointer"
                                />
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Contact;
