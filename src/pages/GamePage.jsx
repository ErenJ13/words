import React, {useState, useEffect} from 'react';
import cards from '../components/data/cards.json'
import Game from '../components/Game/Game'
import '../components/Game/game.css';

export default function GamePage(){
    const [gameCards, setGame] = useState(false)
    const [wordsTable, setWords] = useState([])
    const [count, setCount] = useState(0);
    useEffect(() => {
        setGame(cards)
      }, [])
    
      if(!gameCards){
        return <h1>Loading</h1>
      }
    
      function hadleClickPrev(){
        let copyCount = count;
        copyCount = copyCount -1;
        setCount(copyCount);
      };
      function hadleClickNext(){
        let copyCount = count;
        copyCount = copyCount+1;
        setCount(copyCount);
      };
    
      function editWords(id, theme, rus, eng){
        const copyWords = [...wordsTable]
        const resultEdit = copyWords.map(words =>{
        if(words.id === id){
          words.theme = theme
          words.eng = eng
          words.rus = rus
          return words
        }
        return words
        } )
        setWords(resultEdit)
      }
      return(
        <div className="gameFlex">
          <button className="buttonWord1" onClick={hadleClickPrev}></button>
            <Game item={gameCards[count]} editWords = {editWords}></Game>
            <button className="buttonWord2" onClick={hadleClickNext}></button>
        </div>
      )
}