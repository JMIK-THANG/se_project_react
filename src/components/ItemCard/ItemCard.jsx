import "./ItemCard.css";
import LikeBtn from "../../images/likebutton.png";

function ItemCard({ item, onCardClick, handleCardLike }) {
  console.log("item from itemCard", item);
  const handleCardClick = () => {
    onCardClick(item);
  };
  const handleCardLike2 = () => {
    handleCardLike({ id: item._id, isLiked: item.isLiked });
  };
  return (
    <li className="card">
      <div className="card__like-name">
        <h2 className="card__name">{item.name}</h2>
        <button onClick={handleCardLike2} className="card__like-button">
          <img src={LikeBtn} alt="card like" className="card__like" />
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
