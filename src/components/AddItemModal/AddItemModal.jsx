import React, { useState } from "react";
import "./AddItemModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseClick, onAddItem, isOpen, buttonText }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    const nameInput = e.target.value;
    setName(nameInput);
  };

  const handleUrlChange = (e) => {
    const urlInput = e.target.value;
    setImageUrl(urlInput);
  };

  const handleWeatherTypeChange = (e) => {
    const typeSelected = e.target.value;
    setWeather(typeSelected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return onAddItem({ name, imageUrl, weather });
  };
  return (
    <ModalWithForm
      title="New garment"
      buttonText={buttonText}
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image URL
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className="modal__radio-button">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal_label modal_label_type_radio">
          <input
            name="radioButton"
            type="radio"
            className="modal__radio-input"
            id="hot"
            value="hot"
            onChange={handleWeatherTypeChange}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal_label modal_label_type_radio">
          <input
            name="radioButton"
            type="radio"
            className="modal__radio-input"
            value="warm"
            id="warm"
            onChange={handleWeatherTypeChange}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal_label modal_label_type_radio">
          <input
            name="radioButton"
            type="radio"
            className="modal__radio-input"
            id="cold"
            value="cold"
            onChange={handleWeatherTypeChange}
          />
          Cold
        </label>
      </fieldset>
      <button type="submit" className="modal__add-btn">Add garment</button>
    </ModalWithForm>
  );
};
export default AddItemModal;
