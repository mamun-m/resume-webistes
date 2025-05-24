import { Link } from "react-scroll";
import "./Navbar.css";
import AllResponsive from "../../Temp/AllResponsive";

const Navbar = () => {
  return (
    <AllResponsive>
      <div className="navbar">
        <div className="navbar-left">
          <p>{`</mamun >`} </p>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="skill" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </AllResponsive>
  );
};

export default Navbar;
