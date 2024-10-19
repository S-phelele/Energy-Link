import './App.css';
import Homepage from './Components/Homepage/Hom/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Homepage/Hom/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={< Homepage />}/>
      </Routes>
    </Router>
  );
}

export default App;
