import "./WeatherCard.css"
import sunny from "../../images/sunny.png"
function WeatherCard() { 
      return(
           <section className="weather-card">
            <p className="weather-card__temp">75 &deg;</p>
            <img src={sunny} alt="sunny" className="weather-card__image" />
           </section>
      )
      
}
export default WeatherCard