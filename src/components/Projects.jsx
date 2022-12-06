import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import mastrocred from "../assets/mastocred.jpeg";
import rapidnews from "../assets/rapidnewfrontend.jpeg";
import urlshortener from "../assets/url-shortener.jpg";

const Projects = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className={`py-10`}>
      <h1
        className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${
          lightTheme ? "border-b-[#005269]" : "border-b-[#921267]"
        } duration-300 w-fit mx-auto`}
        data-aos="fade"
      >
        Projects
      </h1>
      <div className="py-5">
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={mastrocred}
            alt="DevHire"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">MastoCred</h2>
            <p className="leading-loose">
              an fintech loan application for local SMEs
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>VueJs, Vuex Toolkit,
                axios.
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="http://mastocred.com/"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
              </span>
              <span>
                <a
                  href="http://mastocred.com/"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="eye"></ion-icon> Live
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={rapidnews}
            alt="DevHire"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Rapid News Api Consumer</h2>
            <p className="leading-loose">
              A mobile application for authenticating users and consuming rapid new api endpoints
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>HTML, CSS and Javascript.
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://github.com/nelliejellie/lendsqr-fp-news"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
              </span>
              <span>
                <a
                  href="https://drive.google.com/file/d/1MOkb1u-pN1o7bbCMMcAU4IiEKU8267_c/view?usp=share_link"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="eye"></ion-icon> Download Apk
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={urlshortener}
            alt="DevHire"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Url Shortener</h2>
            <p className="leading-loose">
              A web application that can be used to shorten any url in a matter
              of seconds
              <br />
              The project uses the{" "}
              <a
                href="https://app.shrtco.de/"
                target="_blank"
                className={`${
                  lightTheme
                    ? "text-[#005269] visited:text-[#005269] border-b-[#005269]"
                    : "text-[#921267]  visited:text-[#921267] border-b-[#921267]"
                } hover:opacity-75 text-xl inline-block py-0.5 border-b text-normal mx-0.5`}
              >
                shrtcode API
              </a>{" "}
              to shorten the links.
              <br /> The project is based on design and specification of a
              frontend mentors challenge.
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>ReactJs, Redux Toolkit, React Router,
                axios and Tailwind
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://github.com/Nwachukwu-Uzor/url-shortener"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
              </span>
              <span>
                <a
                  href="https://url-shortener-ten-rosy.vercel.app/"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="eye"></ion-icon> Live
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
