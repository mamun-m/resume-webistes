import { FaGithub, FaLinkedin } from "react-icons/fa6";
import AllResponsive from "../../Temp/AllResponsive";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { SiSpacex } from "react-icons/si";
const Contact = () => {
  return (
    <div className="bg-add-color">
      <AllResponsive>
        <div id="contact" className="contact-container">
          <div className="contact-left">
            <h1>Contact Me</h1>
            <p>
              "Let’s bring your ideas to life — contact me for modern,
              responsive, and user-friendly web solutions."
            </p>
          </div>
          <div className="contact-right">
            <div className="contact-section-description">
              <a href="https://x.com/MiaMamun17378">
                {" "}
                <SiSpacex />{" "}
              </a>
              <p>{`https://x.com/MiaMamun17378`}</p>
            </div>
            <div className="contact-section-description">
              <a href="https://www.linkedin.com/in/mohammed-mamun-121939234/">
                <FaLinkedin />
              </a>
              <p>{`https://www.linkedin.com/in/mohammed-mamun-121939234/`}</p>
            </div>
            <div className="contact-section-description">
              <a href="https://github.com/mamun-m">
                <FaGithub />
              </a>
              <p>{`https://github.com/mamun-m`}</p>
            </div>
            <div className="contact-section-description">
              <a href="www.email.com">
                <MdEmail />
              </a>
              <p>{`miam6829@gmail.com`}</p>
            </div>
          </div>
        </div>
      </AllResponsive>
    </div>
  );
};

export default Contact;
