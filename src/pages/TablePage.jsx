import React, {useState, useEffect} from 'react';
import words from '../components/data/words.json'
import WordAdd from '../components/Wordlist/Wordlist';
import WordHead from '../components/Wordlist/WordlistHead';
import '../components/Wordlist/wordlist.css';
import '../components/Wordlist/wordhead.css';

export default function CardPage(){

  const [wordsTable, setWords] = useState([])

  useEffect(() => {
    setWords(words)
  }, [])
  return(
    <div className='tableFlex'>
    <WordHead></WordHead>
    {
      wordsTable.map((word) => 
      <WordAdd key = {word.id}  theme = {word.theme} eng = {word.english} 
      rus = {word.russian}></WordAdd>)
    }
    </div>
  )
}