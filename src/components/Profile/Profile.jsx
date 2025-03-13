import React from "react";

import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";

function Profile({
  editProfileClick,
  onCardClick,
  clothingItems,
  handleAddClick,
  logout,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar editProfileClick={editProfileClick} logout={logout} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
}
export default Profile;

// Git Guides - git init
