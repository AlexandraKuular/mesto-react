import btnDeleteCard from '../images/Trash.svg';
import btnLikeCard from '../images/Vector.svg';

function Card({ card, onCardClick }) {
  const handleCard = () => {
    onCardClick(card);
  }
  return (
      <article className="card">
        <button className="card__delete" type="button">
          <img className="card__trash" src={btnDeleteCard} alt="Кнопка удаления" />
        </button>
        <img
          className="card__image"
          src={card.link}
          alt={card.name}
          onClick={handleCard}
        />
        <div className="card__title">
          <h2 className="card__name">{card.name}</h2>
          <div className="card__like-container">
            <button className="card__like" type="button">
              <img src={btnLikeCard} alt="Кнопка лайк" />
            </button>
            <p className="card__like-number">{card.likes.length}</p>
          </div>
        </div>
      </article>
  )
}

export default Card;