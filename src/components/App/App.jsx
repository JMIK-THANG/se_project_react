import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/itemModal";
import Footer from "../Footer/Footer";
import { setToken, getToken, removeToken } from "../../utils/token";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../Contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";

import {
  getItems,
  addItem,
  deleteItem,
  signup,
  signin,
  checkToken,
  updateUserProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/Api";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import CurrentUserContext from "../../Contexts/CurrentUserContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle Edit Profile
  const handleEditProfile = ({ name, avatar }) => {
    const token = getToken();
    updateUserProfile(token, { name, avatar })
      .then((userData) => {
        setCurrentUser(userData);
        closeActiveModal();
      })
      .catch((err) => setError(err.message || "name and avatar required."));
  };

  const handleRegistration = ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    signup(name, password, email)
      .then(() => {
        navigate("/profile");
        closeActiveModal();
      })
      .catch((err) => setError(err.message || "Registration failed"));
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      setError("email and password are required.");
      return;
    }
    signin(email, password).then((data) => {
      if (data.token) {
        setToken(data.token);
        checkToken(data.token)
          .then((data) => {
            setIsLoggedIn(true);
            setCurrentUser(data);
            closeActiveModal();
            const redirectPath = location.state?.from?.pathname || "/profile";
            navigate(redirectPath);
          })
          .catch((err) => {
            console.error("Error fectching user info:", err);
            setIsLoggedIn(false);
            setError("Session expired.  Please log in again.");
          });
      }
    });
  };
  const logout = () => {
    removeToken();
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate("/");
  };
  const handleRegeisterClick = () => {
    setActiveModal("Sign Up");
  };
  const handleLoginClick = () => {
    setActiveModal("login");
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (selectedCard) => {
    setActiveModal("preview");
    setSelectedCard(selectedCard);
  };

  const handleDeleteButtonClick = () => {
    setActiveModal("delete");
  };
  const editProfileClick = () => {
    setActiveModal("edit-profile");
  };
  const onSignUp = (data) => {
    setIsLoading(true);
    return signup(data)
      .then((currentUser) => {
        return signin(data.email, data.password).then((data) => {
          return checkToken(data.token).then((user) => {
            setCurrentUser(user);
            closeActiveModal();
          });
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };
  const onAddItem = (item) => {
    setIsLoading(true);
    const token = getToken();
    return addItem(item, token)
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        closeActiveModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleDeleteItem = () => {
    setIsLoading(true);
    const token = getToken();
    deleteItem(selectedCard, token)
      .then(() => {
        const updatedItems = clothingItems.filter(
          (item) => item._id !== selectedCard._id
        );
        setClothingItems(updatedItems);
        closeActiveModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) => (prev === "C" ? "F" : "C"));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  // need to commend
  useEffect(() => {
    const jwt = getToken();
    console.log(jwt, "useEffect");
    if (!jwt) return;
    checkToken(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error("Error fectching user info:", err);
        setIsLoggedIn(false);
        setError("Session expired.  Please log in again.");
      });
  }, []);

  const handleCardLike = ({ id, isLiked }) => {
    const token = getToken();
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };
  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <Header
              handleLoginClick={handleLoginClick}
              handleRegisterClick={handleRegeisterClick}
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    onCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    handleCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      editProfileClick={editProfileClick}
                      clothingItems={clothingItems}
                      onCardClick={handleCardClick}
                      handleAddClick={handleAddClick}
                      logout={logout}
                      handleCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <AddItemModal
              isOpen={activeModal === "add-garment"}
              handleCloseClick={closeActiveModal}
              onAddItem={onAddItem}
            />
            <ItemModal
              activeModal={activeModal}
              selectedCard={selectedCard}
              onClick={handleCardClick}
              handleCloseClick={closeActiveModal}
              handleDeleteButtonClick={handleDeleteButtonClick}
            />
            <RegisterModal
              isOpen={activeModal === "Sign Up"}
              handleCloseClick={closeActiveModal}
              handleRegistration={handleRegistration}
              signup={onSignUp}
              handleLoginClick={handleLoginClick}
            />
            <LoginModal
              isOpen={activeModal === "login"}
              handleCloseClick={closeActiveModal}
              handleLogin={handleLogin}
              onClickRegister={handleRegeisterClick}
            />
            <ConfirmDeleteModal
              handleCloseClick={closeActiveModal}
              isOpen={activeModal === "delete"}
              onConfirmDeleteClick={handleDeleteItem}
            />
            <EditProfileModal
              isOpen={activeModal === "edit-profile"}
              handleCloseClick={closeActiveModal}
              editProfileClick={editProfileClick}
              handleEditProfile={handleEditProfile}
            />
            <Footer />
          </CurrentTemperatureUnitContext.Provider>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}
export default App;
