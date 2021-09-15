import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import magic1 from "../images/magic-1.png";
import magic2 from "../images/magic-2.png";
import magic3 from "../images/magic-3.png";
import magic4 from "../images/magic-4.png";
import magic5 from "../images/magic-5.png";
import Sidebar from "../components/Sidebar";

const MagicNumbers = () => {
  const data = {
    title: "magic numbers",
    github: "https://github.com/kaveesha-ranmuthu/magic-numbers",
    demo: "https://magic-numbers.netlify.app/",
    images: [magic1, magic2, magic3, magic4, magic5],
    moodboard: "",
    colorPalette: "",
    description:
      "This was the first personal project I created. Since making themes on Tumblr in 2015, this was my first time getting back into web development. I wanted to create something that was fun and interesting but also simple so I could get into things slowly. ",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "The ‘Find Your Number’ page lets the user put in their name and get a number that describes their personality.",
      "The calculation method is listed below the input box.",
      "The ‘Daily Horoscope’ page lets the user choose their star sign and shows them their horoscope for the day.",
    ],
  };
  return (
    <>
      <Navbar />
      <Sidebar />
      <Project {...data} />
    </>
  );
};

export default MagicNumbers;
