import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <section id="home" className="font-poppins w-full     h-auto -z-10  ">
      <div className="mx-auto  max-w-7xl px-6 md:p-10  flex  flex-col ">
        <div className=" flex flex-col md:flex-row gap-6 md:items-center mt-16 md:mt-12 p-10  md:justify-center mx-auto md:mx-auto   ">
          <div className="mx-auto md:order-2  md:mx-auto z-600">
            <img className="content-heroImg   bg-center bg-cover bg-no-repeat border-[3px] border-[#2d2e32] relative lg:h-80 lg:w-80 h-72 w-72 rounded-custom animate-morph " />
          </div>

          <div className="mx-auto p-6 text-center md:text-left  max-w-lg md:mt-4  ">
            <h2 className="font-bold mb-6 md:mt-4  text-[40px] md:text-[45px] lg:text-[55px] leading-tight text-[#2d2e32]  ">
              Front-End React Developer👋
            </h2>
            <p className="font-mullish  leading-6 text-md lg:text-lg  ">
              Hi, I am David Ameyaw. A passionate Front-end React Developer
              based in Kumasi, Ghana. 📍
            </p>
            {/*  */}
            <div className=" flex gap-4 items-center justify-center md:justify-start  mt-8">
              <a
                href="https://www.linkedin.com/in/david-ameyaw123-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customBlue"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  style={{ color: "#2d2e32" }}
                />
              </a>
              <a
                href="https://github.com/daameyaw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2xl"
                  style={{ color: "#2d2e32" }}
                />
              </a>
            </div>
          </div>
        </div>
        {/* SKILLS */}
        <div className="flex flex-col md:flex-row gap-6  text-center justify-center md:justify-start md:ml-48 items-center pb-12 md:mt-10 md:-mb-28 md:text-left ">
          <p className="font-mulish text-[#04040c] font-bold pb-4 md:pb-0  border-b-2 md:border-r-2 md:border-b-0 md:pr-4  border-[#2d2e32]">
            Tech Stack
          </p>
          <ul className="flex gap-8 justify-center items-center flex-wrap">
            <li className="hover:-translate-y-4 transition duration-300 ease-in-out">
              {" "}
              <img src="https://skillicons.dev/icons?i=html,css" alt="" />
            </li>
            <li className="hover:-translate-y-4 transition duration-300 ease-in-out">
              {" "}
              <img src="https://skillicons.dev/icons?i=js,git" alt="" />
            </li>
            <li className="hover:-translate-y-4 transition duration-300 ease-in-out">
              {" "}
              <img src="https://skillicons.dev/icons?i=react" alt="" />
            </li>
            <li className="hover:-translate-y-4 transition duration-300 ease-in-out">
              {" "}
              <img src="https://skillicons.dev/icons?i=tailwind,scss" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
// border-right: 2px solid rgba(45, 46, 50, .5);
//     color: #2d2e32;
//     font-family: Mulish, sans-serif;
//     font-weight: 600;
//     margin-right: 7rem;
//     padding-right: 2rem;

// animation: morph 8s ease-in-out infinite;
//     background-image: url(/static/media/pfp_webp.f334283….webp);
//     background-position: 50%;
//     background-repeat: no-repeat;
//     background-size: cover;
//     border: 3px solid #2d2e32;
//     border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
//     height: 35rem;
//     position: relative;
//     transition: all 1s ease-in-out;
//     width: 35rem;

export default Hero;
