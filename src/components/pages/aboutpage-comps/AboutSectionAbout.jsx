import { Link as ScrollLink } from "react-scroll";

const AboutSectionAbout = () => {
  return (
    <section name="About" className="relative w-full h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8">
        <div className="flex mt-8 md:mt-0">
          <img
            src="/images/profile.png"
            alt="My profile"
            className="rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20"
            style={{ filter: "drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))" }}
          />
        </div>

        <div className="flex flex-col justify-center items-center h-[85%] md:h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4">
            Who I am?
          </h1>

          <div className="flex items-center bg-primary-color/20 rounded-md py-2 px-4">
            <img
              className="h-[60px] w-[60px] mr-2"
              src="/images/ind.png"
              alt="india"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl md:py-1 font-semibold text-white">
              Indian - 24 years old
            </h2>
          </div>

          <p className="text-md md:text-lg text-gray-300 py-4 max-x-md text-justify">
            My name is Kuswanth Kumar, and I am a budding front-end developer
            based in Visakhapatnam, India. I am currently seeking opportunities
            to kickstart my career in the field of web development. Although I
            don't have any professional experience yet, I am passionate about
            learning and exploring new technologies.
          </p>

          <p className="text-md md:text-lg text-gray-300 max-x-md text-justify">
            Learning is a passion of mine, and I find great satisfaction in
            exploring new tools and technologies. In terms of my education, I
            completed a diploma in Electrical and Electronics Engineering, where
            I gained a solid understanding of technical concepts. During this
            time, I also developed a keen interest in Computer Science. As a
            dedicated and organized individual, I approach tasks with a positive
            attitude and prioritize effectively to meet team goals. I am eager
            to apply my knowledge and skills to create compelling web
            applications and contribute to the ever-evolving world of front-end
            development.
          </p>
        </div>
      </div>

      <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
    </section>
  );
};

export default AboutSectionAbout;
