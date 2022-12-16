import React, {useState, useEffect} from 'react';
import cards from '../components/data/cards.json'
import Card from '../components/Cards/Cards';
import '../components/Cards/card.css';

export default function CardPage(){
    const [wordCards, setCards] = useState([]);
    useEffect(() => {
        setCards(cards)
      }, [])
      return(
        <div className="cardsFlex">
        {
          wordCards.map(card =>
              <Card {...card} key = {card.id} ></Card> 
          )
        }
      </div>
      )
}