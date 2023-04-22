import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import pimg from "../../public/images/pimg.png";
import nimg from "../../public/images/nimg.png";
import mimg from "../../public/images/mimg.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, img, link, github, summary }) => {
  return (
    <motion.div
      className=" w-full flex flex-col md:flex-row items-center justify-between rounded-3xl border border-solid border-dark bg-boxi shadow-2xl sm:p-12 p-5 hover:shadow-[0_0px_50px_#0a0909] transition duration-500 ease-in-out   "
      whileHover={{ scale: 1.05, boxShadow: "10px 10px 20px #0a0909" }}
      transition={{ duration: 0.27 }}
    >
      <Link
        className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg "
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.27 }}
        />
      </Link>

      <div className="w-full md:w-1/2 flex flex-col items-start justify-between pl-6 mt-8 md:mt-0">
        <span className="text-myYellow font-medium text-normal sm:text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 font-medium text-light"
        >
          <h2 className="my-2 w-full text-left text-2xl sm:text-4xl font-semibold">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium mb-10 text-[#f7f2e1]">{summary}</p>
        <div className=" flex items-center">
          <Link href={github} target="_blank" className="w-10 ">
            <GithubIcon className="text-myYellow " />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg hover:bg-myYellow bg-dark hover:text-dark text-light p-2 px-6 sm:text-lg font-semibold"
          >
            Vist Project
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ type, title, img, link, github }) => {
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row items-center justify-center rounded-2xl border border-solid border-dark p-6 relative bg-boxi hover:shadow-[0_0px_50px_#0a0909] transition duration-500 ease-in-out mb-16   "
      whileHover={{ scale: 1.05, boxShadow: "10px 10px 20px #0a0909" }}
      transition={{ duration: 0.27 }}
    >
      <Link
        className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg "
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.27 }}
        />
      </Link>

      <div className="w-full md:w-1/2 flex flex-col items-start justify-between mt-4 md:mt-0 md:pl-6">
        <span className="text-myYellow font-semimedium text-normal">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 text-light hover:underline  w-full text-left text-xl font-semibold">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline hover:text-myYellow text-light"
          >
            Vist
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon className="text-myYellow " />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Akshit Bansal</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full bg-dark flex flex-col items-center justify-center">
        <div className="pt-20">
          <AnimatedText
            text="What I Did"
            className="mb-10 mt-9 text-xl font-bold text-light md:text-8xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mx-4 md:mx-16 ">
            <div className="col-span-1 md:col-span-12 ">
              <FeaturedProjects
                title="Minimal Blog Website"
                summary="This website was built using Next.js and features a minimal design with limited use of images. It utilizes a range of technologies including Tailwind CSS and is focused on providing an optimal front-end user experience."
                link="https://minimal-blog-rust.vercel.app/"
                type="Featured Project"
                img={mimg}
                github="https://github.com/akshitbansall/minimal-blog"
              />
            </div>
            <div className="col-span-1 md:col-span-6 ">
              <Projects
                title="Netflix Clone"
                link="https://netflix-clone-three-lake.vercel.app/"
                type="Featured Project"
                img={nimg}
                github="https://github.com/akshitbansall/netflix-clone"
              />
            </div>
            <div className="col-span-1 md:col-span-6">
              <Projects
                title="Personal Portfolio"
                link="/"
                type="Featured Project"
                img={pimg}
                github="/"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default projects;
