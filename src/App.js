import "./App.css";
import Header from "./assets/components/header/Header";
import './assets/components/header/Header.css'
import React, {useState} from 'react';
import Card from './assets/components/cards/Cards';
import './assets/components/cards/card.css';
import WordAdd from './assets/components/wordlist/Wordlist';
import './assets/components/wordlist/wordlist.css';
import WordHead from './assets/components/wordlist/WordlistHead';
import './assets/components/wordlist/wordhead.css';
import Cards from './assets/components/cards/game.jsx'

const words = [
  {
id: "1",
  theme: "Животные",
  eng: "hedgehog",
  rus: "ежик",
},
{
  id: "2",
  theme: "Предмет",
  eng: "pen",
  rus: "ручка",
}, 
{
  id: "3",
  theme: "Семья",
  eng: "mother",
  rus: "мама",
},
{
  id: "4",
  theme: "Овощи",
  eng: "cucumber",
  rus: "огурец",
}
]
const cards = [
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
]
// const words = [
//   {
// id: "1",
//   theme: "Животные",
//   eng: "hedgehog",
//   rus: "ежик",
// },
// {
//   id: "2",
//   theme: "Предмет",
//   eng: "pen",
//   rus: "ручка",
// }, 
// {
//   id: "3",
//   theme: "Семья",
//   eng: "mother",
//   rus: "мама",
// },
// {
//   id: "4",
//   theme: "Овощи",
//   eng: "cucumber",
//   rus: "огурец",
// }
// ]
export default function App() {
  const [currentData, setCurrentData] = useState(cards);


const handleClick = (id) => {
  setCurrentData(prevState => prevState.map(card => card.id === id ? ({ ...card, isChecked: true }) : ({ ...card, isChecked: false })))
};


     return ( 
      <div className = "App">
         <Header></Header>
        <div className="cardsFlex">
         
          
            {
            currentData.map(card =>
                <Card {...card} key = {card.id} onClick={handleClick} ></Card>
            )
          }
        </div>
      <Cards></Cards>
            {/* <WordAdd></WordAdd>
        */}
        <div className="wordFlex">
          <table>
  <WordHead></WordHead>
  
          {
        words.map((word) => 
            <tbody><WordAdd key = {<td>{word.id}</td>}  theme = {<td>{word.theme}</td>} eng = {<td>{word.eng}</td>} 
            rus = {<td>{word.rus}</td>}></WordAdd></tbody>)
          }
      </table>
        </div>
      </div>
    );
  }
