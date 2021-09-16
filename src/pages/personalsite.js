import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import website1 from "../images/website-1.png";
import website2 from "../images/website-2.png";
import website3 from "../images/website-3.png";
import website4 from "../images/website-4.png";
import moodboard from "../images/moodboard.png";
import colourPalette from "../images/website-color-palette.png";
import Sidebar from "../components/Sidebar";

const PersonalSite = () => {
  const data = {
    title: "personal website",
    github: "https://github.com/kaveesha-ranmuthu/personal-website",
    demo: "/",
    images: [website1, website2, website3, website4],
    moodboard: moodboard,
    colourPalette: colourPalette,
    description:
      "I wanted to create a website for myself where I can showcase my projects and show some of my personality through the site design. This was the first time that I created a moodboard and wireframes before beginning the coding process. I found that having thought of the design beforehand made the development process much easier as I was able to focus only on the code since the design was already finished.",
    technologies: ["React", "Styled Components", "HTML", "CSS", "JavaScript"],
    features: [
      "The home has a simple greeting and welcomes the user to the site.",
      "The work page shows my past work experience.",
      "The projects page has a list of my personal projects and each list item links to their own page.",
      "The contact page has my contact info.",
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

export default PersonalSite;
