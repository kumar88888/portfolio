import { useEffect } from "react";
import { Link } from "react-router-dom";
import AboutSectionAbout from "../pages/aboutpage-comps/AboutSectionAbout";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutSectionAbout />

      <div className="relative flex justify-center">
        <Link
          to="/"
          className="text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-primary-color cursor-pointer mx-auto md:mx-0 self-end hover:scale-110 duration-300 mb-10"
        >
          <span className="">
            <i className="bx bx-home-heart mr-2"></i>
          </span>
          Go back
        </Link>
      </div>
    </>
  );
};

export default AboutPage;
