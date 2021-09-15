import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import streamlist1 from "../images/streamlist-1.png";
import streamlist2 from "../images/streamlist-2.png";
import streamlist3 from "../images/streamlist-3.png";
import streamlist4 from "../images/streamlist-4.png";
import streamlist5 from "../images/streamlist-5.png";
import Sidebar from "../components/Sidebar";

const Streamlist = () => {
  const data = {
    title: "streamlist",
    github: "https://github.com/kaveesha-ranmuthu/streamlist",
    demo: "https://streamlist.netlify.app/",
    images: [streamlist1, streamlist2, streamlist3, streamlist4, streamlist5],
    moodboard: "",
    colourPalette: "",
    description:
      "I decided to create this website to automate the process of creating streaming playlists. Streaming playlists are playlists created by fans of artists to increase the streams of a song on Spotify. The playlist has multiple instances of the song chosen by the user with two to three songs wedged between each instance. The non-streaming songs are derived from the user’s liked songs, most listened to songs, and other songs released by the artist of the chosen song.",
    technologies: [
      "HTML",
      "Sass/SCSS",
      "JavaScript",
      "React",
      "Material UI",
      "Spotify Web API",
    ],
    features: [
      "The user signs in via their Spotify account.",
      "They can search for any song that is in the Spotify catalogue.",
      "Once they choose the song, they must confirm their choice.",
      "A customised playlist is then created.",
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

export default Streamlist;
