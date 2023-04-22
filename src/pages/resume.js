import React from "react";
import Head from "next/head";
import ProfilePic from "../../public/images/m1.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

const Resume = () => {
  return (
    <main className="w-full bg-dark flex flex-col items-center justify-center">
      <div className="pt-20">
        <AnimatedText
          text="About Me"
          className="mb-3 mt-9 text-xl font-bold text-light md:text-8xl"
        />
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="  flex flex-col mx-7 mt-16  sm:ml-16 sm:mr-4 sm:mb-8 sm:mt-10 md:flex-row">
          <div className="">
            <motion.div
              className="flex flex-col items-start justify-start rounded-3xl pt-9 pr-9 pl-9 pb-5 bg-boxi max-w-sm mb-8 hover:shadow-none hover:ring-4 hover:ring-opacity-60 hover:ring-gray-400 transition duration-500 ease-in-out"
              whileHover={{ scale: 1.05, boxShadow: "10px 10px 20px #0a0909" }}
              transition={{ duration: 0.27 }}
            >
              <div className="flex flex-row">
                <div className="mb-4 sm:items-center ">
                  <Image
                    src={ProfilePic}
                    alt=""
                    className=" w-1/2  h-auto hover:drop-shadow-image"
                    priority
                  />
                </div>
              </div>

              <div className="w-full flex flex-col  md:items-start">
                <p className="text-3xl items-start font font-medium text-light mb-1">
                  Akshit Bansal
                </p>
                <p className=" text-xl sm:text-2xl font-medium mb-5 mt-1 text-myYellow">
                  Developer &amp; Designer
                </p>
                <p className=" text-sm sm:text-xl font-semimedium text-[#f7f2e1] mb-2">
                  akhitmoga1@gmail.com
                </p>
                <a href="mailto:akshitmoga1@gmail.com">
                  <button className="font-medium hover:text-myYellow hover:border-myYellow text-white bg-transparent text-xs py-2 px-4 border-2 rounded-full my-4">
                    Contact Me
                  </button>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="  hover:shadow-[0_0px_50px_#0a0909] flex flex-col items-center md:items-start justify-start rounded-3xl pt-9 pr-9 pl-9 pb-4 bg-boxi max-w-sm mb-8 transition duration-500 ease-in-out"
              whileHover={{ scale: 1.05, boxShadow: "10px 10px 20px #0a0909" }}
              transition={{ duration: 0.27 }}
            >
              <div className="w-full flex flex-col items-center md:items-start">
                <p className="text-xl font-medium text-light mb-1">
                  Social Media Links:
                </p>

                <p className="text-xs sm:text-xl sm:font-semimedium mb-5 mt-1 text-myYellow">
                  <a
                    href="https://www.instagram.com/desii.thoughts/"
                    target="_blank"
                    className="hover:underline text-myYellow"
                  >
                    {" "}
                    Instagram
                  </a>{" "}
                  |
                  <a
                    href="https://www.linkedin.com/in/akshit-bansal-404952227/"
                    target="_blank"
                    className="hover:underline text-myYellow"
                  >
                    {" "}
                    LinkedIn
                  </a>{" "}
                  |
                  <a
                    href="https://twitter.com/akshiitbansal"
                    target="_blank"
                    className="hover:underline text-myYellow"
                  >{" "}
                    Twitter
                  </a>
                </p>
                <button className="font-medium hover:text-myYellow hover:border-myYellow text-white bg-transparent text-xs py-2 px-4 border-2 rounded-full my-4">
                  Follow Me
                </button>
              </div>
            </motion.div>

            <div className="flex flex-col items-center md:items-start justify-start rounded-3xl pt-9 pr-9 pl-9 pb-4 bg-boxi max-w-sm mb-8">
              <div className="w-full flex flex-col items-center md:items-start">
                <p className="text-5xl mb-5 mt-6 text-myYellow">
                  <FontAwesomeIcon icon={faCode} />
                </p>
                <button className="font-medium hover:text-myYellow hover:border-myYellow text-white bg-transparent text-normal py-2 px-4 pl-0 pt-0 rounded-full my-4">
                  Coding
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start justify-start rounded-3xl pt-9 pr-9 pl-9 pb-4 bg-boxi max-w-sm mb-8">
              <div className="w-full flex flex-col items-center md:items-start">
                <p className="text-5xl mb-5 mt-6 text-myYellow">
                  <FontAwesomeIcon icon={faPenNib} />
                </p>
                <button className="font-medium hover:text-myYellow hover:border-myYellow text-white bg-transparent text-normal py-2 px-4 pl-0 pt-0 rounded-full my-4">
                  UI/UX
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start justify-start rounded-3xl pt-9 pr-9 pl-9 pb-4 bg-boxi max-w-sm mb-8">
              <div className="w-full flex flex-col items-center md:items-start">
                <p className="text-5xl mb-5 mt-6 text-myYellow">
                  <FontAwesomeIcon icon={faBook} />
                </p>
                <button className="font-medium hover:text-myYellow hover:border-myYellow text-white bg-transparent text-normal py-2 px-4 pl-0 pt-0 rounded-full my-4">
                  Reading
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="  flex flex-col items-start justify-start max-w-5xl pt-0 pb-8 pl-8 pr-9 sm:pr-12 mb-8 sm:pl-14 mt-16 sm:mt-10 ">
          <Head>
            <title>Me | Akshit Bansal</title>
          </Head>

          <h1 className="text-3xl font-medium mb-4 text-light">About Me</h1>

          <p className="mb-4 text-xl font-semimedium text-[#f7f2e1]">
            I&apos;m an old school kid, experience in tech and design profession with
            a strong understanding of social media. Passionate about creating
            user-centric solutions for complex problems. Applying knowledge to
            the business world and continuously improving skills through ongoing
            learning.
          </p>
          <h2 className="text-3xl font-medium mt-10 mb-4 text-light">
            Experience
          </h2>
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-medium mb-2 text-myYellow">
              CEO/Founder |
              <a
                href="https://www.glinoo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline p-1"
              >
                @Glinoo
              </a>
            </h3>
            <p className="text-[#f7f2e1] font-light mb-1">
              July 2022 - present
            </p>
            <p className="mt-4 mb-4 text-xl font-semimedium text-[#f7f2e1]">
              Glinoo streamlines hotel check-in/out and manages data collected
              in handwritten diaries, while enhancing customer experience
              through their automated website solutions.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl mt-3 font-medium mb-2 text-myYellow">
              Co-Founder/Media Manager |{" "}
              <a
                href="https://www.codeshod.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline p-1"
              >
                @Codeshod
              </a>
            </h3>
            <p className="text-[#f7f2e1] font-light mb-1">
              June 2022 - Sept 2022
            </p>
            <p className="mt-4 mb-4 text-xl font-semimedium text-[#f7f2e1]">
              Codeshod offers a digital ecosystem where individuals can learn
              and earn while also providing digital services to startups. We
              empower learners with earning opportunities and help startups
              succeed.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl  mt3 font-medium mb-2 text-myYellow">
              Core-Team | Entrepreneurship Cell (E-Cell CU)
            </h3>
            <p className="text-[#f7f2e1] font-light mb-1">
              Feb 2021 - Present{" "}
            </p>
            <p className="mt-4 mb-4 text-xl font-semimedium text-[#f7f2e1]">
              Mentored diverse startups, providing valuable guidance,
              Hosted/attended entrepreneurship events, showcasing passion for
              innovation & Built valuable connections with industry leaders to
              promote collaboration
            </p>
          </div>

          <h2 className="text-3xl font-medium mt-10 mb-4 text-light">
            Education
          </h2>
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl  font-medium mb-2 text-myYellow">
              Chitkara University | Punjab
            </h3>
            <p className="text-[#f7f2e1] font-light mb-1">2020 - 2024</p>
            <p className="mt-4 mb-4 text-xl font-semimedium text-[#f7f2e1]">
              Pre-final year student pursuing a Bachelor&apos;s degree in Computer
              Science Engineering with a CGPA of 9.8.
            </p>
          </div>

          <h2 className="text-3xl font-medium mt-7 mb-4 text-light">Intrest</h2>
          <div className="">
            <div className=" mb-4 text-xl font-semimedium text-[#f7f2e1] ">
              <div className=" flex flex-wrap">
                <div className="w-1/2 p-4 pt-2 pl-0">Guitar</div>
                <div className="w-1/2 p-4 pt-2 pl-0">Book Reading</div>
                <div className="w-1/2 p-4 pt-2 pl-0">Designing</div>
                <div className="w-1/2 p-4 pt-2 pl-0">Coding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
