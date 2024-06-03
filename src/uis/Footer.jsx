import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(null);
  useEffect(() => {
    const year = new Date().getFullYear();
    console.log(year);
    setYear(year);
  }, []);
  return (
    <footer className=" bg-[#2d2e32] py-[60px] font-poppins text-center">
      <div className="mx-auto flex flex-col md:flex-row gap-6 justify-around items-center">
        <h3 className="text-white text-lg font-bold">
          Copyright &copy; {year}.All rights reserved
        </h3>
        <div className="flex  gap-4">
          <div>
            {" "}
            <a
              href="https://www.linkedin.com/in/david-ameyaw123-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-customBlue"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                style={{ color: "#ffffff" }}
              />
            </a>
          </div>
          <div className="hover:text-customBlue">
            <a
              href="https://github.com/daameyaw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                style={{ color: "#ffffff" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
