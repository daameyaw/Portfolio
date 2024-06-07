import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

function Link({ page, selectedPage, setSelectedPage, closeMenu }) {
  const curPage = page.toLowerCase();

  const handleClick = () => {
    console.log("gdg");
    // Call the closeMenu function when needed
    closeMenu();
  };
  // console.log(isMenuToggled);

  return (
    <AnchorLink
      className="font-bold hover:text-customBlue"
      href={`#${curPage}`}
      onClick={() => {
        handleClick;
      }}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
