import "./ItemCard.css";
import likeButton from "../../images/likebutton.png";
import darkLikeButton from "../../images/darkLikeButton.png";
import CurrentUserContext from "../../Contexts/CurrentUserContext";
import { useContext } from "react";

function ItemCard({item, onCardClick, handleCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((userId) => {
    return userId === currentUser._id;
  });
  const handleLikeClick = () => {
    handleCardLike({ id: item._id, isLiked: isLiked });
  };
  return (
    <li className="card">
      <div className="card__like-name">
        <h2 className="card__name">{item.name}</h2>

        <button onClick={handleLikeClick} className="card__like-button">
          <img
            src={isLiked ? darkLikeButton : likeButton}
            alt="card like"
            className="card__like"
          />
        </button>
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
