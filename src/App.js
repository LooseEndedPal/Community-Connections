import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home';
import Layout from './pages/layout';
import Events from './pages/events';
import HelpBoard from './pages/helpBoard';
import Friends from './pages/friends';
import Profile from './pages/profile';

function App() {

  const[user, setUser] = useState([
    {
        "id": 0,
        "fname": "Jessie",
        "lname": "Wheeler",
        "email": "jesswheels.gmail.com",
        "hobbies": ["Knitting", "Sports", "Gardening"],
        "picture": "https://i.pinimg.com/originals/24/d1/0a/24d10a00df895b1c7bf3eb5499827f88.jpg"
    }
]);

  return (
    <div className="App">

      <Layout />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/CommunityEvents' element={<Events />}></Route>
        <Route path='/HelpBoard' element={<HelpBoard />}></Route>
        <Route path='/Friends' element={<Friends user = {user}/>}></Route>
        <Route path='/Profile' element={<Profile user = {user} setUser = {setUser}/>}></Route>
      </Routes>

    </div>


  );
}

export default App;
