import React, { useState, useEffect } from "react";
import Card from "../Card";
import "./style.css";
import { getAll, save, update, remove } from "../../services/PasswordCards";
import CreateCard from "../CreateCard";

function TopCardList() {
  const [cards, setCards] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(0);

  const createNewCard = (card) => {
    save(card).then((result) => {
      getAll().then((cards) => {
        setCards(cards);
        setNumberOfCards(cards.length);
      });
    });
  };
  const updateCard = (id, card) => {
    update(id, card).then((result) => {
      getAll().then((cards) => {
        setCards(cards);
        setNumberOfCards(cards.length);
      });
    });
  };
  const removeCard = (id) => {
    remove(id).then((result) => {
      getAll().then((cards) => {
        setCards(cards);
        setNumberOfCards(cards.length);
      });
    });
  };

  useEffect(() => {
    getAll().then((cards) => {
      setCards(cards);
      setNumberOfCards(cards.length);
    });
  }, []);

  return (
    <section className="top-cards">
      <div className="wrapper">
        <p className="header-total">Your Passwords ({numberOfCards})</p>
        <div className="grid">
          {cards.map((cardData) => {
            let propss = {
              ID: cardData.ID,
              URL: cardData.URL,
              NAME: cardData.NAME,
              USERNAME: cardData.USERNAME,
              PASSWORD: cardData.PASSWORD,
              UPDATE: updateCard,
              DELETE: removeCard,
            };
           return <Card key={propss.ID} {...propss}></Card>;
          })}
          <CreateCard create={createNewCard}></CreateCard>
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
