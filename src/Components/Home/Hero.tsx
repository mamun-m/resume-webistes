import "./Hero.css";
import Button from "../../Temp/Button";
import { Link } from "react-scroll";
import TypingEffect from "../../Temp/TypingEffect";
import { Home__img } from "../../assets/Assets";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <p className="hero-title">Front-end developer</p>
        <h3>Mohammad Mamun </h3>
        <TypingEffect>
          Front-End Developer skilled in building responsive, user-friendly web
          interfaces using HTML, CSS, JavaScript,Typescript, React,
          redux-toolkit, git-github
        </TypingEffect>

        <div className="hero-btns">
          <Button>
            <Link to="contact" smooth={true} duration={500}>
              Hire Me
            </Link>{" "}
          </Button>
          <Button>
            {" "}
            <Link to="project" smooth={true} duration={500}>
              {" "}
              View Work
            </Link>{" "}
          </Button>
        </div>
      </div>
      <div className="hero-right">
        <img src={Home__img.homeImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
