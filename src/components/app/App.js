import "../../style/App.css";
import Header from "../Header/Header";
import '../Header/Header.css'
import GamePage from "../../pages/GamePage";
import CardPage from "../../pages/CardPage";
import TablePage from "../../pages/TablePage"


export default function App() {


     return ( 
      <div className = "App">
        <Header></Header>
        <CardPage></CardPage>
        <GamePage></GamePage>
        <TablePage></TablePage> 
      </div>
    );
  }
