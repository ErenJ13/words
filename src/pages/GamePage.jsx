import React, {useState, useEffect} from 'react';
import cards from '../components/data/cards.json'
import Game from '../components/Game/Game'
import '../components/Game/game.css';

export default function GamePage(){
    const [gameCards, setGame] = useState(false)
    const [count, setCount] = useState(0);

    useEffect(() => {
        setGame(cards)
      }, [])
    
      if(!gameCards){
        return <h1>Loading</h1>
      }
    
      function hadleClickPrev(){
        if (count !== 0) {
          setCount(count - 1);
          } else if (count < cards.length){
            setCount(cards.length-1)
          }  
      };
      function hadleClickNext(){
        
        if (count !== cards.length-1) {
          setCount(count + 1);
          } else if (count >= cards.length-1) {  
          setCount(0);
          } 
      };

      return(

        <div className="gameFlex">
          <button className="buttonWord1" onClick={hadleClickPrev}></button>
            <Game item={gameCards[count]}></Game>
            <button className="buttonWord2" onClick={hadleClickNext}></button>
        </div>
      )
}



