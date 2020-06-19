import React from 'react';
import FlashCard from './FlashCard';

const FlashCardList = ({ flashCards }) => (
  <div className="card-grid">
    {flashCards.map(flashCard => (
      <FlashCard flashCard={flashCard} key={flashCard.id} />
    ))}
  </div>
);

export default FlashCardList;
