import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };
  
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleCardClick = (data) => {
    setIsImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(data);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
      <div className="root">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
        </div>
        <PopupWithForm
          title="Редактировать профиль"
          name="editProfile"
          textBtn="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          >
          <>
            <input
              className="popup__input"
              type="text"
              name="fullname"
              id="fullnameInput"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="error" id="fullnameInput-error"></span>
            <input
              className="popup__input"
              type="text"
              name="identity"
              id="identityInput"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="error" id="identityInput-error"></span>
          </>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="add"
          textBtn="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <>
            <input
              className="popup__input"
              type="text"
              name="imgName"
              id="cardNameInput"
              autoComplete="off"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="error" id="cardNameInput-error"></span>
            <input
              className="popup__input"
              type="url"
              name="link"
              id="cardLinkInput"
              autoComplete="off"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="error" id="cardLinkInput-error"></span>
          </>
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="editAvatar"
          textBtn="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <>
            <input
              className="popup__input"
              type="url"
              name="link"
              id="avatarLinkInput"
              autoComplete="off"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="error" id="avatarLinkInput-error"></span>
          </>
        </PopupWithForm>
        <PopupWithForm
          title="Вы уверены?"
          name="deleteCard"
          textBtn="Да"
          onClose={closeAllPopups} />
        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
          isOpen={isImagePopupOpen}
        />
      </div>
  );
};

export default App;