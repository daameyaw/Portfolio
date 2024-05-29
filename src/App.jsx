// import React from "react";
import { useState } from "react";
import "./index.css";
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./uis/NavBar";
import Nav from "./uis/nav";
import Hero from "./uis/Hero";
import About from "./uis/About";
import Projects from "./uis/Projects";

function App() {
  const [selectedPage, setselectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  return (
    <div className=" ">
      <NavBar selectedPage={selectedPage} setselectedPage={setselectedPage} />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
