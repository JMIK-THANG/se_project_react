import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/itemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../Contexts/CurrentTemperatureUnitContext";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="page">
      <div className="page__content">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <ModalWithForm
            title="New garment"
            buttonText="Add garment"
            activeModal={activeModal}
            isOpen={activeModal === "add-garment"}
            handleCloseClick={closeActiveModal}
          >
            <label htmlFor="name" className="modal__label">
              Name{" "}
              <input
                type="text"
                className="modal__input"
                id="name"
                placeholder="Name"
              />
            </label>
            <label htmlFor="imageUrl" className="modal__label">
              Image{" "}
              <input
                type="text"
                className="modal__input"
                id="imageUrl"
                placeholder="Image URL"
              />
            </label>
            <fieldset className="modal__radio-button">
              <legend className="modal__legend">
                Select the weather type:
              </legend>
              <label
                htmlFor="hot"
                className="modal__label modal___label_type_radio"
              >
                <input
                  name="radioButton"
                  type="radio"
                  className="modal__radio-input"
                  id="hot"
                />
                Hot
              </label>
              <label
                htmlFor="warm"
                className="modal__label modal___label_type_radio"
              >
                <input
                  name="radioButton"
                  type="radio"
                  className="modal__radio-input"
                  id="warm"
                />
                Warm
              </label>
              <label
                htmlFor="cold"
                className="modal__label modal___label_type_radio"
              >
                <input
                  name="radioButton"
                  type="radio"
                  className="modal__radio-input"
                  id="cold"
                />
                Cold
              </label>
            </fieldset>
          </ModalWithForm>
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClick={handleCardClick}
            handleCloseClick={closeActiveModal}
          />
          <Footer />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </div>
  );
}

export default App;
