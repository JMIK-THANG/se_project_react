import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection"
import "./Profile.css";

function Profile({onCardClick}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-itmes">
            <ClothesSection onCardClick={onCardClick}/>
      </section>
    </div>
  );
}
export default Profile;