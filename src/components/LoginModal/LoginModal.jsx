import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const loginModal = ({
  handleCloseClick,
  isOpen,
  handleLogin,
  onClickRegister,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });

  const buttonEnabled = Object.keys(isValid).every((key) => {
    return isValid[key];
  }); //[email, password]

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setErrors((prevErrors) => {
    //   return { ...prevErrors, [name]: e.target.validationMessage };
    // });

    // setIsValid((prev) => {
    //   return { ...prev, [name]: e.target.validity.valid };
    // });

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <ModalWithForm
      title="Log in"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
    >
      <label htmlFor="email" className="modal__label">
        Email*
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="modal__input"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />
      <span className="modal__span-email">{errors.email}</span>
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
        minLength={4}
        maxLength={30}
      />
      <span className="modal__span-password">{errors.password}</span>
      <div className="modal__login-container">
        <button
          type="submit"
          className="modal__login-btn"
          // className={`modal__login-btn ${
          //   buttonEnabled ? "modal__login-btn_enabled" : ""
          // }`}
          onClick={handleCloseClick}
          // disabled={!buttonEnabled}
        >
          Log in
        </button>
        <button
          onClick={onClickRegister}
          type="button"
          className="modal__signup-btn"
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default loginModal;
