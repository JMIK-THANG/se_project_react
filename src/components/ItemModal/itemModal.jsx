import closeBtn from "../../images/closeBtn.svg";

import "./ItemModal.css";

function ItemModal({
  activeModal,
  handleCloseClick,
  card,
  handleDeleteButtonClick,
}) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        >
          <img src={closeBtn} alt="close button" />
        </button>
        <img
          src={card.imageUrl}
          alt="clothes picture"
          className="modal__image"
        />
        <div className="modal__footer">
          <div className="modal__footer-left">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            onClick={handleDeleteButtonClick}
            type="button"
            className="modal__delete-button"
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
