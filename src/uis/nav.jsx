import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "../components/Link";

function Nav({ selectedPage, setselectedPage }) {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="fixed items-center top-0 w-full px-10 py-6 flex justify-between content-center shadow-md z-200 bg-white h-auto left-0 font-poppins   text-[#2d2e32]">
      <div className="font-bold text-l md:text-2xl">Asante.dev</div>

      <div className=" gap-8 items-center hidden md:flex ">
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

      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <FontAwesomeIcon
            className="fa-xl "
            icon={faXmark}
            style={{ color: "#000000" }}
          />
        ) : (
          <FontAwesomeIcon
            className="fa-xl "
            icon={faBars}
            style={{ color: "#000000" }}
          />
        )}
      </div>

      <div
        className={
          nav
            ? "bg-white z-500  fixed h-full left-0 top-0 w-[60%] ease-in-out duration-500 "
            : "fixed left-[-100%] ease-in-out duration-900"
        }
      >
        {/* <div className="font-bold mt-6 ml-10 text-2xl ">Asante.dev</div> */}

        <div className=" p-8 text-2xl flex flex-col gap-8 mt-10  ">
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
    </div>
  );
}

export default Nav;
