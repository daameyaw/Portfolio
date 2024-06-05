import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <section id="contact" className="h-auto   md:p-12  font-poppins ">
      <div className="flex flex-col  gap-10 md:gap-10 p-12 text-center justify-center md:justify-start md:items-start md:text-start items-center pb-12 md:mt-10 ">
        <div className="mb-8">
          <h4 className="text-customBlue uppercase text-xl font-bold mb-6  ">
            Contact
          </h4>
          <p className="text-[#2d2e32] font-extrabold text-3xl ">
            Don&apos;t be shy! Hit me up 👇
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-24  text-center justify-center md:justify-start md:items-start  items-center pb-12 md:mt-10 md:text-start ">
          {/* LOCATION */}
          <div className="flex flex-col  md:flex-row md:gap-6 md:justify-start md:items-start">
            <div className="w-16 h-16 rounded-full bg-white shadow-lg mb-6 flex justify-center  items-center mx-auto">
              <FontAwesomeIcon
                icon={faMap}
                size="2xl"
                style={{ color: "#147efb" }}
              />
            </div>
            <div>
              <h4 className="text-[#2d2e32] text-lg font-bold mb-2">
                Location
              </h4>
              <p className="leading-snug">Kumasi , Ghana</p>
            </div>
          </div>
          {/* EMAIL */}
          <div className="flex flex-col  md:flex-row md:gap-6 md:justify-start md:items-start">
            <div className="w-16 h-16 rounded-full bg-white shadow-lg mb-6 flex justify-center items-center mx-auto">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2xl"
                style={{ color: "#147efb" }}
              />{" "}
            </div>
            <div>
              <h4 className="text-[#2d2e32] text-lg font-bold mb-2">Mail</h4>
              <a
                className="leading-snug hover:text-customBlue"
                href="mailto:davidameyaw607@gmail.com"
              >
                davidameyaw607@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
