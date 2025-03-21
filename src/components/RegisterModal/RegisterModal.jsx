import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseClick,
  isOpen,
  signup,
  handleLoginClick,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(data);
  };
  return (
    <ModalWithForm
      title="Sign Up"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      handleLoginClick={handleLoginClick}
    >
      <label htmlFor="email" className="modal__label">
        Email*
      </label>
      <input
        type="text"
        name="email"
        id="register-email"
        className="modal__input"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
        autoComplete="email"
      />
      <label htmlFor="password" className="modal__label">
        Password*
      </label>
      <input
        id="password"
        className="modal__input"
        name="password"
        type="password"
        placeholder="password"
        value={data.password}
        onChange={handleChange}
        autoComplete="password"
      />
      <label htmlFor="name" className="modal__label">
        Name
      </label>
      <input
        id="name"
        className="modal__input"
        name="name"
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
        autoComplete="username"
      />
      <label htmlFor="avatar" className="modal__label">
        Avatar
      </label>
      <input
        id="avatar"
        className="modal__input"
        name="avatar"
        type="url"
        placeholder="Avatar URL"
        value={data.avatar}
        onChange={handleChange}
        autoComplete="url"
      />
      <div className="modal__login-container">
        <button type="submit" className="modal__next-btn">
          next
        </button>
        <button
          onClick={handleLoginClick}
          type="button"
          className="modal__register-login"
        >
          {" "}
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
};
export default RegisterModal;
