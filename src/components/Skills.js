import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

const Skills = () => {
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

    function ParallaxText({ children, baseVelocity = 100 }) {
        const baseX = useMotionValue(0);
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400,
        });
        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false,
        });

        const x = useTransform(baseX, (v) => ` ${wrap(-20, -45, v)}%`);

        const directionFactor = useRef(1);
        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get();

            baseX.set(baseX.get() + moveBy);
        });

        return (
            <div className="parallax overflow-hidden tracking-tighter leading-tight m-0 whitespace-no-wrap flex flex-nowrap">
                <motion.div
                    className="font-semibold text-5xl whitespace-no-wrap flex flex-nowrap"
                    style={{ x }}
                >
                    <span className="block mr-10 mt-10">{children}</span>
                    <span className="block mr-10">{children}</span>
                    <span className="block mr-10">{children}</span>
                    <span className="block mr-10">{children}</span>
                    <span className="block mr-10">{children}</span>
                    <span className="block mr-10">{children}</span>


                </motion.div>
            </div>
        );
    }

    return (
        <>
            <motion.button
                className=" hidden lg:block text-light font-medium w-full mt-8 text-xl items-center justify-between rounded-3xl border border-solid border-dark bg-boxi shadow-2xl sm:p-8 mb-10 hover:shadow-[0_0px_50px_#0a0909] transition duration-500 ease-in-out mr-8"
                style={{ minHeight: "40px" }}
                whileHover={{ scale: 1.05, boxShadow: "10px 10px 20px #0a0909" }}
                transition={{ duration: 0.27 }}
                onClick={handleOpen}
            >
                Skills that set me apart - check them out!
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="m-10 mt-16 fixed top-0 left-0 right-0 bottom-0 bg-light z-10 flex flex-col justify-center items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
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
                            <section className="p-16 relative z-50 text-dark">
                                <ParallaxText baseVelocity={-5}>Next.js</ParallaxText>
                                <ParallaxText baseVelocity={5}>Node.js</ParallaxText>
                                <ParallaxText baseVelocity={-5}>React Js</ParallaxText>
                                <ParallaxText baseVelocity={5}>Tailwind CSS</ParallaxText>
                                <ParallaxText baseVelocity={-5}>Expresss.js</ParallaxText>
                                <ParallaxText baseVelocity={5}>Figma</ParallaxText>
                            </section>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Skills;
