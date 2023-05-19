import profileAvatarBtnEdit from '../images/Edit.svg';
import profileBtnEdit from '../images/EditButton.svg';
import btnAddCard from '../images/AddButton.svg';
import api from '../utils/Api.js';
import Card from './Card';
import { useEffect, useState } from 'react';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {console.log(err)});
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((item) => {
        setCards(item);
      })
      .catch((err) => {console.log(err)});
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <button className="profile__avatar-btnedit" type="button" onClick={onEditAvatar}>
            <img className="profile__avatar-edit" src={profileAvatarBtnEdit} alt="Кнопка редактирования" />
          </button>
          <img className="profile__avatarimg" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__info-title">
            <h1 className="profile__info-name">{userName}</h1>
            <button className="profile__info-btnborder" type="button" onClick={onEditProfile}>
              <img className="profile__info-btn" src={profileBtnEdit} alt="Кнопка редактирования" />
            </button>
          </div>
          <p className="profile__info-identity">{userDescription}</p>
        </div>
        <button className="profile__button" type="button" onClick={onAddPlace}>
          <img className="profile__button-plus" src={btnAddCard} alt="Кнопка добавления" />
        </button>
      </section>
      <section className="cards" id="cards">
        {cards.map((card) => {
          return (
            <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            />
          )
        })}
      </section>
    </main>
  )
}

export default Main;