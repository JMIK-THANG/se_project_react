import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  handleCloseClick,
  isOpen,
  handleLogin,
  onClickRegister,
}) => {
  const [data, setData] = useState({
    email: "",
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
        id="login-email"
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
        <button
          type="submit"
          className="modal__login-btn"
          onClick={handleCloseClick}
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

export default LoginModal;
