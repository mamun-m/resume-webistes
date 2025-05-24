import React, { type ReactNode } from "react";
import "./AllTemp.css";
const AllResponsive: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="all-responsive-container">{children}</div>;
};

export default AllResponsive;
