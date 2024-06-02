import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import p1 from "../assets/p1.jpg";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <section
      id="projects"
      className="font-poppins p-10 h-auto mb-10 mx-auto px-8 leading-normal "
    >
      <div className="text-xl font-bold text-center md:text-left md:ml-10">
        <h5 className="uppercase text-customBlue text-xl font-bold mb-4 ">
          portfolio
        </h5>
        <p className="text-[#2d2e32] text-xl font-extrabold font-poppins">
          Each Project is a unique piece of development
        </p>
      </div>
      {/* FIRST PROJECT */}
      <div className="flex flex-col md:flex-row md:gap-0 gap-10 mx-auto mt-10 p-6 mb-24 shadow-sm rounded-lg ">
        <div className=" rounded-xl overflow-hidden w-[450px] h-[300px] lg:w-[613px] lg:h-[415px]  mx-auto">
          <img
            className="object-cover shadow-md w-full h-full"
            src={p1}
            alt=""
          />
        </div>
        {/* TEXT */}
        <div className="mx-auto max-w-xs lg:max-w-sm md:-ml-6    text-center lg:mt-10">
          <h4 className="uppercase text-[#2d2e32] font-bold font-poppins mb-4 text-xl">
            Quizly
          </h4>

          <article className="mx-auto leading-relaxed lg:leading-loose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
            autem, molestiae molestias minus a doloribus repellat nihil
            voluptate consequuntur dolore voluptatibus exercitationem
            praesentium, ad aliquam laboriosam cupiditate atque consequatur at?
          </article>
          <div className="flex flex-row justify-center items-center mt-4 gap-8 font-bold">
            <div>Javascript</div>
            <div>SCSS</div>
          </div>
          <div className="flex flex-row justify-center items-center mt-4 gap-16">
            <div className="flex flex-row gap-2 justify-center items-center">
              <p className="text-md font-medium hover:text-customBlue cursor-pointer">
                Code
              </p>
              <div className="cursor-pointer">
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
            <div className="flex flex-row gap-2 justify-center items-center">
              <p className="text-md font-medium hover:text-customBlue cursor-pointer">
                Live Demo
              </p>
              <div className="cursor-pointer">
                <a
                  href="https://github.com/daameyaw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="lg"
                    style={{ color: "#2d2e32" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND PROJECT */}
      <div className="flex flex-col  md:gap-0 md:flex-row-reverse gap-10 mx-auto mt-10 p-6 shadow-sm rounded-lg ">
        <div className=" rounded-xl overflow-hidden w-[450px] h-[300px] lg:w-[613px] lg:h-[415px]  mx-auto">
          <img
            className="object-cover shadow-md w-full h-full"
            src={p1}
            alt=""
          />
        </div>
        {/* TEXT */}
        <div className="mx-auto max-w-xs lg:max-w-sm   text-center lg:mt-10">
          <h4 className="uppercase text-[#2d2e32] font-bold font-poppins mb-4 text-xl">
            Quizly
          </h4>

          <article className="mx-auto leading-relaxed lg:leading-loose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
            autem, molestiae molestias minus a doloribus repellat nihil
            voluptate consequuntur dolore voluptatibus exercitationem
            praesentium, ad aliquam laboriosam cupiditate atque consequatur at?
          </article>
          <div className="flex flex-row justify-center items-center mt-4 gap-8 font-bold">
            <div>Javascript</div>
            <div>SCSS</div>
          </div>
          <div className="flex flex-row justify-center items-center mt-4 gap-16">
            <div className="flex flex-row gap-2 justify-center items-center">
              <p className="text-md font-medium hover:text-customBlue cursor-pointer">
                Code
              </p>
              <div className="cursor-pointer">
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
            <div className="flex flex-row gap-2 justify-center items-center">
              <p className="text-md font-medium hover:text-customBlue cursor-pointer">
                Live Demo
              </p>
              <div className="cursor-pointer">
                <a
                  href="https://github.com/daameyaw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="lg"
                    style={{ color: "#2d2e32" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
