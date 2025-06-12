import React, { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import CurrentUserContext from "../../Contexts/CurrentUserContext";

const ClothesSection = ({
  onCardClick,
  clothingItems,
  handleAddClick,
  handleCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="clothes-section">
      <div className="clothes-section__items">
        <p className="clothes-section__item">Your Items</p>
        <button onClick={handleAddClick} className="clothes-section__btn">
          + Add New
        </button>
      </div>
      <ul className="clothes-section__list ">
        {clothingItems.map((item) => {
          if (item.owner === currentUser._id) {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                handleCardLike={handleCardLike}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};
export default ClothesSection;
