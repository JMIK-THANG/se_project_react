import {React, useState} from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css"
const EditProfileModal = ({handleCloseClick, isOpen}) => {
  const [editProfile, setEditProfile] = useState({
    name: "",
    avatar: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((preProfile) => ({
      ...preProfile,
      [name]: value,
    }));
  };
//   const handleSubmit = (e) => { 
//       e.preventDefault()
//       handleEditProfile(data)
//   }
  return (
    <ModalWithForm
      title="edit-profile"
      // onSubmit={handleSubmit}
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
    >
      <label htmlFor="name" className="modal__label">
        name*
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="modal__input"
        placeholder="name"
        value={editProfile.name}
        onChange={handleChange}
      />
      <label htmlFor="avatar" className="modal__label">
        avatar*
      </label>
      <input
        id="avatar"
        className="modal__input"
        name="avatar"
        type="url"
        placeholder="avatar"
        value={editProfile.avatar}
        onChange={handleChange}
      />
      <button type="submit" className="modal__save-button">Save changes</button>
    </ModalWithForm>
  );
};
export default EditProfileModal;
