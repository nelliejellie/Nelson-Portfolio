import React, { useContext } from "react";
import picture from "../assets/emeka.jpg";
import ThemeContext from "../context/ThemeContext";

const About = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className={`py-10`}>
      <h1
        className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${
          lightTheme ? "border-b-[#005269]" : "border-b-[#921267]"
        } duration-300 w-fit mx-auto`}
        data-aos="fade"
      >
        About Me
      </h1>
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-5">
        <img
          src={picture}
          alt="uzor nwachukwu"
          className="h-[150px] w-[150px] md:h-[350px] md:w-[350px] object-cover rounded-full mx-auto md:mx-0"
          data-aos="fade-right"
        />
        <p className="leading-loose text-md md:text-lg" data-aos="fade-left">
          Nelson is a brilliant software engineer who's passionate about building
          software solutions with C# and javascript. I'm always open to learning
          new things in the tech space and also finding new and better ways to solve
          software related issues.
        </p>
      </div>
    </section>
  );
};

export default About;
