const GeneralFooter = () => {
  return (
    <footer className="relative mt-auto flex flex-col items-center text-gray-300 mb-6 gap-2 md:flex-row md:justify-evenly">
      <div className="flex gap-x-4 md:order-last">
        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce"
          target="_blank"
          href="https://github.com/kumar88888"
        >
          <i className="bx bxl-github"></i>
        </a>

        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce"
          target="_blank"
          href="https://www.linkedin.com/in/kuswanth-kumar-b06769187/"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>

        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce"
          target="_blank"
          href="https://unrivaled-jalebi-95533f.netlify.app"
        >
          <i className="bx bx-question-mark"></i>
        </a>
      </div>

      <p className="md:order-2">• Copyright ©2023 | All rights reserved • </p>
      <p>@Kuswanth_Kumar</p>
    </footer>
  );
};

export default GeneralFooter;
