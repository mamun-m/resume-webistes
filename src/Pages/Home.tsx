import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Navbar from "../Components/Navbar/Navbar";
import Project from "../Components/Projects/Project";
import Skill from "../Components/Skills/Skill";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="Home-container" id="home">
        <Navbar />
        <About />
      </div>
      <Skill />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
