import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Pokedex from './Components/PokedexPage/PokedexPage';
import Error from './Components/Error/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
