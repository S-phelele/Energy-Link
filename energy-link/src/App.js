import './App.css';
import Homepage from './Components/Homepage/Hom/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Homepage/Hom/Header';
import Login from './Components/Homepage/Login/Login';
import Register from './Components/Homepage/Register/user';
import AdminDashboard from './Components/Admin/AdminDashboard';
import ClientDashboard from './Components/Client/ClientDashboard';
import applicationReg from './Components/Client/ApplicationRegister';
import TrackApplication from './Components/Client/TrackApplication';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={< Homepage />}/>
        <Route path="/login" element={< Login />}/>
        <Route path="/user" element={< Register />}/>
        <Route path="/homepage" element={< Homepage />}/>
        <Route path="/clientDash" element={< ClientDashboard />}/>
        <Route path="/adminDash" element={< AdminDashboard />}/>
        <Route path="/applicationReg" element={< applicationReg />}/>
        <Route path="/trackApplication" element={< TrackApplication />}/>

        
      </Routes>
    </Router>
  );
}

export default App;
