import React from 'react'
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import Panel from './components/Panel/Panel'
import TaskList from './components/TaskList/TaskList'
import Profile from './components/Profile/Profile.jsx'
import Statistics from './components/Statistics/Statistics'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  sessionStorage.setItem('userSession', JSON.stringify({isLogged: false}))


  return (
    <BrowserRouter>
    <div className='app-container'>
        <SideBar />
        <Routes>
          <Route path="/dashboard" element={<Panel/>}/>
          <Route path="/list" element={<TaskList/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route
            path="/"
            element={<Home/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
  );
  
}

export default App;
