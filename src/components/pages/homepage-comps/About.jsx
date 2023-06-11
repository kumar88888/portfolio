import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section
      name="About"
      className="relative w-full md:h-screen text-white h-unset"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
            About me
          </h2>
        </div>

        <p className="mb-4 py-6">
          Hey there! I'm based in Visakhapatnam(Andhra Pradesh, India) and I'm
          enthusiastic about venturing into the world of front-end development.
          Even though I don't have professional experience in this field, my
          passion for technology and my strong determination to learn and grow
          have led me to explore the exciting realm of web development.
        </p>

        <p>
          I'm captivated by the endless possibilities that web technologies
          offer, and I'm excited to dive headfirst into creating remarkable web
          applications. My eagerness to learn, coupled with my dedication to
          producing high-quality work, drives me to pursue new challenges and
          acquire the necessary skills to become a proficient front-end
          developer. I'm thrilled to embark on this journey and I believe that
          with my determination, attention to detail, and commitment to
          excellence, I will be able to create impressive projects both
          professionally and personally.
        </p>

        <Link
          to="/about-me"
          className="text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300"
        >
          See more
          <span className="">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>

      <ScrollLink
        to="Projects"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default About;
