// import React from "react";
import { useState } from "react";
import "./index.css";
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./uis/NavBar";
import Nav from "./uis/nav";
import Hero from "./uis/Hero";
import About from "./uis/About";
import Projects from "./uis/Projects";
import Contact from "./uis/Contact";
import Footer from "./uis/Footer";

function App() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const [selectedPage, setselectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  function closeMenu(curPage) {
    setIsMenuToggled(false);
    setselectedPage(curPage);
  }
  return (
    <div className=" ">
      <NavBar
        selectedPage={selectedPage}
        setselectedPage={setselectedPage}
        isMenuToggled={isMenuToggled}
        setIsMenuToggled={setIsMenuToggled}
        closeMenu={closeMenu}
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
