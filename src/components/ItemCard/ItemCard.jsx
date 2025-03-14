import "./ItemCard.css";
import LikeBtn from "../../images/likebutton.png";

function ItemCard({ item, onCardClick, handleCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className="card">
      <div className="card__like-name">
        <h2 className="card__name">{item.name}</h2>
        <img src={LikeBtn} alt="card like" className="card__like"/>
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
