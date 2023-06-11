import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import MobileSocialLinks from "./MobileSocialLinks";

const Home = () => {
  return (
    <section name="Home" className="relative w-full md:h-screen h-unset">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row md:gap-8">
        <div className="flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-lime-400 to-yellow-100 bg-clip-text text-transparent mb-2 mt-3 md:mt-0 md:mb-4">
            I'm Kuswanth Kumar
          </h1>
          <h2 className="rounded-md bg-white max-w-max px-6 inline text-xl md:text-3xl lg:text-4xl font-semibold text-black">
            Frontend Developer
          </h2>
          <p className="text-gray-300 py-4 max-x-md text-justify">
            {" "}
            Welcome to my portfolio, I'm excited to share my journey with you!
          </p>

          <div className="hidden desktop:flex">
            <Link
              to="About"
              smooth
              duration={500}
              className="group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-primary-color mx-auto md:mx-0"
            >
              About me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          <MobileSocialLinks />
        </div>

        <div className="flex order-1 md:order-2 mt-8 md:mt-0">
          <img
            src="/images/profile.png"
            alt="My profile"
            className="mb-2 rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20"
            style={{ filter: "drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
