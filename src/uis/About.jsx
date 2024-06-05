import p2 from "../assets/p2.jpg";
function About() {
  return (
    <section id="about" className="h-auto bg-[#f9f9f9] mt-12  md:p-12 ">
      <div className="flex flex-col md:flex-row gap-6 md:gap-20 p-12 text-center justify-center items-center pb-12 md:mt-10 mx-auto ">
        {/* IMAGE */}
        <div className="rounded-xl object-contain overflow-hidden w-[400px] h-[350px] md:w-[1020px] md:h-[274px] lg:w-[435px] lg:h-[360px]  md:rounded-xl">
          <img className="object-cover w-full h-full" src={p2} alt="About" />
        </div>{" "}
        {/* TEXT */}
        <div className=" max-w-sm md:max-w-md md:text-left md:justify-center ">
          <h3 className="text-customBlue font-bold text-2xl font-poppins mb-3">
            About Me
          </h3>
          <h4 className="text-3xl font-bold leading-snug text-[#2d2e32] mb-6 md:max-w-md">
            Front-end Developer based in Kumasi,Ghana.
          </h4>
          <p className="text-[#767676]  text-lg mb-4 leading-relaxed">
            Hey, my name is David, and I&apos;m a Frontend Developer. My passion
            is to create and develop a clean UI/UX for my users.
          </p>
          <p className="text-lg font-mullish text-[#767676] mb-4 leading-normal">
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
