import React from "react";
import SideBarItem from "./SideBarItem";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const tables = ["Places", "Categories", "Cities"];

  return (
    <ul className="side-bar-content " >
      {tables.map((item) => {
       return <SideBarItem name={item} />;
      })}
    </ul>
  );
}

export default SideBar;
