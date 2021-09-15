import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import covid1 from "../images/covid-1.png";
import covid2 from "../images/covid-2.png";
import Sidebar from "../components/Sidebar";

const Covid = () => {
  const data = {
    title: "covid-19 data visualisation",
    github: "https://github.com/kaveesha-ranmuthu/covid-data-vis",
    demo: "https://covid-data-vis.netlify.app",
    images: [covid1, covid2],
    moodboard: "",
    colorPalette: "",
    description:
      "I wanted to create this app to explore data visualisation and graphing libraries. I chose COVID-19 data for this project as I thought it would be easily accessible. To display the data as a graph, I chose to use the Recharts library as it didn’t have a large learning curve but still created beautiful graphics.",
    technologies: [
      "HTML",
      "Sass/SCSS",
      "JavaScript",
      "React",
      "Recharts Library",
    ],
    features: [
      "The initial screen shows global COVID-19 data from March 2020 to now.",
      "There is a list of countries to the right of the graph where the user can choose a country and see a graph for the selected country.",
      "There are filters below the graph where the user can see the total cases, active cases, deaths, and recovered individually.",
      "There is also a loading screen when opening the site initially and switching between countries.",
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

export default Covid;
