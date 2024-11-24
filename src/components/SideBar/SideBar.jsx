import React from "react";
import avatar from "../../images/avatar.png";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="side bar Avatar" />
      <p className="sidebar__username">User Name</p>
    </div>
  );
}
export default SideBar;
