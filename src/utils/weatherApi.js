export const getWeather = ({ lat, lon }, APIkey) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject("Err: ${res.status");
    }
  });
};
