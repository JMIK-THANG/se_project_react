export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../images/day/cloudy.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "rain",
    url: new URL("../images/day/rain.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../images/day/storm.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../images/day/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../images/day/fog.png", import.meta.url).href,
  },

  // Night
  {
    day: false,
    condition: "clear",
    url: new URL("../images/night/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../images/night/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../images/night/fog.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../images/night/rain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../images/night/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL("../images/night/storm.png", import.meta.url).href,
  },
];
export const defaultWeatherOptions = {
  day: {
    url: new URL("../images/day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../images/night/default.png", import.meta.url).href,
  },
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];
const coordinates = {
  lat: 33.018505,
  lon: -80.175652,
};
const APIkey = "c8489bea2132a0bcd73d0c40fd08fadb";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrjmik.crabdance.com"
    : "http://localhost:3001";

export { coordinates, APIkey, baseUrl };
