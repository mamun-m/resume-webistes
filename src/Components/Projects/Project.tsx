import { assets__card } from "../../assets/Assets";
import AllResponsive from "../../Temp/AllResponsive";
import "./Project.css";

const Project = () => {
  return (
    <div className="all-project-setup">
      <AllResponsive>
        <div className="see-project">
          <h1>Projects </h1>
          <div id="project" className="project-container">
            {assets__card.map((item, index) => (
              <div key={index} className="project-content">
                <img className="project-image" src={item.img} alt="" />
                <div className="project-card-details">
                  <a href={item.sites} target="_blank">
                    visit site
                  </a>
                  <a href={item.source} target="_blank">
                    source code{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AllResponsive>
    </div>
  );
};

export default Project;
