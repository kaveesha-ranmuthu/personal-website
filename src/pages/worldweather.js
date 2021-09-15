import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import weather1 from "../images/weather-1.png";
import weather2 from "../images/weather-2.png";
import weather3 from "../images/weather-3.png";
import Sidebar from "../components/Sidebar";

const WorldWeather = () => {
  const data = {
    title: "world weather",
    github: "https://github.com/kaveesha-ranmuthu/world-weather",
    demo: "https://world-weather-data.netlify.app",
    images: [weather1, weather2, weather3],
    moodboard: "",
    colorPalette: "",
    description:
      "This was the first website I made using React so I wanted to keep the concept simple and focus on understanding the framework better. I didn’t spend too much time on styling for this project for the same reason. ",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    features: [
      "The user first chooses a country and then a city.",
      "The app then displays the weather information for the city. This includes the temperature, humidity, pressure, chance of rain, and wind.",
      "It also displays the time of sunrise, sunset, moonrise, and moonset.",
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

export default WorldWeather;
