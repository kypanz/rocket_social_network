import './App.css';
import Header from './components/Header/Header';

// If is connected
import Connected from './components/Connected/Connected';

// Raffle system
import Raffle from './components/Raffle/Raffle';

// React router
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
        <Route path="/" element={<Connected />} />
        <Route path="raffle" element={<Raffle />} />
      </Routes>
    </div>
  );
}

export default App;
