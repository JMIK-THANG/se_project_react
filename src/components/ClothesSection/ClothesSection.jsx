import React from "react";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
const ClothesSection = ({onCardClick}) => {
  return (
    <div className="clothes-section">
      <div className="clothes-section__items">
        <p className="clothes-section__item">Your Items</p>
        <button className="clothes-section__btn">+ Add New</button>
      </div>
      <ul className="clothes-section__list ">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
};
export default ClothesSection;