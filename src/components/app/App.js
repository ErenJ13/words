import "../../style/App.css";
import Header from "../Header/Header";
import '../Header/Header.css'
import React, {useState, useEffect} from 'react';
import Card from '../Cards/Cards';
import '../Cards/card.css';
import WordAdd from '../Wordlist/Wordlist';
import WordHead from '../Wordlist/WordlistHead';
import Game from '../Game/Game'
import '../Game/game.css';
import words from '../data/words.json'
import cards from '../data/cards.json'

const card = [
  {
id: "1",
  name: "dog",
  translate: "собака",
  color: "rgb(68, 63, 63)",
},
{
  id: "2",
  name: "cat",
  translate: "кот",
  color: "rgb(68, 63, 63)"
}, 
{
  id: "3",
  name: "rat",
  translate: "крыса",
  color: "rgb(68, 63, 63)",
},
{
  id: "4",
  name: "tiger",
  translate: "тигр",
  color: "rgb(68, 63, 63)",
}
];
export default function App() {
  const [wordCards, setCards] = useState([]);
  const [wordsTable, setWords] = useState([])
  const [gameCards, setGame] = useState(false)
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCards(cards)
  }, [])
  useEffect(() => {
    setWords(words)
  }, [])
  useEffect(() => {
    setGame(card)
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
     return ( 
      <div className = "App">
        <Header></Header>

        <div className="cardsFlex">
          {
            wordCards.map(card =>
                <Card {...card} key = {card.id} ></Card> 
            )
          }
        </div>
        <div className="gameFlex">
          <button className="buttonWord1" onClick={hadleClickPrev}></button>
            <Game item={gameCards[count]} editWords = {editWords}></Game>
            <button className="buttonWord2" onClick={hadleClickNext}></button>
        </div>
        <div className="wordFlex">
            <WordHead></WordHead>
          {
            wordsTable.map((word) => 
            <WordAdd key = {word.id}  theme = {word.theme} eng = {word.english} 
            rus = {word.russian}></WordAdd>)
          }
          </div>
      </div>
    );
  }
