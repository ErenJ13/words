
import { PureComponent } from "react";
import data from "./data.js";
import './card.css';

function Card(props){

  return (
    
    < div className="card" >
                
    <div className="cardName">{props.english}</div>
    <div className="showTranslate">{props.russian}</div>

</div>
  );
}

export default class Cards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      words: data,
      currentIndex: 0
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    // const response = await fetch();
    // const result = await response.json();
    // console.log(result);
    // this.setState({
    //   words: result
    // });
  };

  onNextClick = () => {
    let { currentIndex, words } = this.state;
    let nextIndex = currentIndex + 1;

    if (nextIndex === words.length) {
      nextIndex = 0;
    }

    this.setState({
      currentIndex: nextIndex
    });
  };
  onPrevClick = () => {
    let { currentIndex} = this.state;
    let nextIndex = currentIndex - 1;

    // if (nextIndex < words.length) {
    //   nextIndex = words.length - 1;
    // }

    this.setState({
      currentIndex: nextIndex
    });
  };
  render() {
    let { words, currentIndex } = this.state;
    let card = words[currentIndex];

    if (currentIndex === words.length) {
      return "END";
    }

    if (card) {
      return (
        <div>
          <button onClick={this.onPrevClick}>{"<-"}</button>

          <Card english={card.english} russian = {card.russian} transcription = {card.transcription}   />
          {currentIndex}

          <button onClick={this.onNextClick}>{"->"}</button>
        </div>
      );
    }

    return "LOADING";
  }
}
