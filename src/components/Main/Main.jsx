import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../utils/constants";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../Contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, onCardClick, clothingItems, handleCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is
           {currentTemperatureUnit === "F"
            ? weatherData.temp.F
            : weatherData.temp.C} 
          &deg; {currentTemperatureUnit} You may want to wear
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              item.weather, weatherData.type;
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                  handleCardLike={handleCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
