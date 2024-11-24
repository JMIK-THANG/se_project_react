import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseClick, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [link, setUrl] = useState("");
  const [type, setType] = useState("");

  const handleNameChange = (e) => {
    const nameInput = e.target.value;
    setName(nameInput);
  };

  const handleUrlChange = (e) => {
    const urlInput = e.target.value;
    setUrl(urlInput);
  };

  const handleWeatherTypeChange = (e) => {
    const typeSelected = e.target.value;
    setType(typeSelected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, type });
  };
  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
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
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className="modal__radio-button">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal___label_type_radio">
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
        <label htmlFor="warm" className="modal__label modal___label_type_radio">
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
        <label htmlFor="cold" className="modal__label modal___label_type_radio">
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
    </ModalWithForm>
  );
};

export default AddItemModal;
