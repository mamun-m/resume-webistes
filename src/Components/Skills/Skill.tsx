import { assets__data } from "../../assets/Assets";
import AllResponsive from "../../Temp/AllResponsive";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill-extra-bg">
      <AllResponsive>
        <div id="skill" className="skill-main">
          <h1>Skills </h1>
          <div className="skill-container">
            {assets__data.map((item, index) => (
              <div key={index} className="skill-content-details">
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </AllResponsive>
    </div>
  );
};

export default Skill;
