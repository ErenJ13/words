import "../../style/App.css";
import Header from "../Header/Header";
import GamePage from "../../pages/GamePage";
import TablePage from "../../pages/TablePage"
import ErrorPage from "../../pages/ErrorPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {


     return ( 
      <Router>
      <div className = "App">
        <Header></Header>
        <Routes>
          <Route path="/game" element={<GamePage />} />
          <Route path="/" element={<TablePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        
      </div>
      </Router>
    );
  }
