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
import AddItemModal from "../AddItemModal/AddItemModal";
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
  const onAddItem = (item) => {
    console.log(item);
    console.log("I was submitted");
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
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            handleCloseClick={closeActiveModal}
            onAddItem={onAddItem}
          />
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
