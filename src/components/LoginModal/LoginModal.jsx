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
    username: "",
    password: "",
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
    console.log("submit login modal");
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
        type="text"
        name="email"
        id="email"
        className="modal__input"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
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
      />

      <div className="modal__login-container">
        <button type="submit" className="modal__login-btn">
          Log in
        </button>
        <button onClick={onClickRegister} type="button" className="modal__signup-btn">
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default loginModal;
