import { useState } from "react";
import Link from "../components/Link";
import useMediaQuery from "../hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
function NavBar({
  selectedPage,
  setselectedPage,
  isMenuToggled,
  setIsMenuToggled,
  closeMenu,
}) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");

  // const toggleMenu = () => {
  //   setIsMenuToggled(false);
  // };

  return (
    <div className="fixed items-center top-0 w-full px-10 py-6 flex justify-between justify-items-center  shadow-md z-10 bg-white  left-0 font-poppins   text-[#2d2e32]  ">
      <div className="font-bold text-xl md:text-2xl">David.dev</div>

      {isAboveMediumScreens ? (
        <div className="flex gap-8 items-center ">
          <Link
            selectedPage={selectedPage}
            setselectedPage={setselectedPage}
            page="Home"
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}
            closeMenu={closeMenu}
          />
          <Link
            selectedPage={selectedPage}
            setselectedPage={setselectedPage}
            page="About"
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}
            closeMenu={closeMenu}
          />
          <Link
            selectedPage={selectedPage}
            setselectedPage={setselectedPage}
            page="Projects"
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}
            closeMenu={closeMenu}
          />
          <Link
            selectedPage={selectedPage}
            setselectedPage={setselectedPage}
            page="Contact"
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}
            closeMenu={closeMenu}
          />
        </div>
      ) : (
        <button
          className=" cursor-pointer  rounded-full text-black  "
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <FontAwesomeIcon
            className="fa-xl "
            icon={faBars}
            style={{ color: "#000000" }}
          />
        </button>
      )}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="w-[300px] h-full fixed right-0 bottom-0 bg-white  ">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FontAwesomeIcon
                className="fa-xl"
                icon={faXmark}
                style={{ color: "#000000" }}
              />
            </button>
          </div>

          <div className="flex transition duration-300 ease-in-out  flex-col gap-10  ml-[33%] z-20     ">
            <Link
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
              page="Home"
            />
            <Link
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
              page="About"
            />
            <Link
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
              page="Projects"
            />
            <Link
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
              page="Contact"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
