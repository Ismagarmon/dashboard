import React from 'react'
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Panel from './components/Panel/Panel'
import TaskList from './components/TaskList/TaskList'
import Profile from './components/Profile/Profile'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  sessionStorage.setItem('userSession', JSON.stringify({isLogged: true}))


  return (
    <BrowserRouter>
    <div className='app-container'>
        <SideBar />
        <Routes>
          <Route path="/dashboard" element={<Panel/>}/>
          <Route path="/list" element={<TaskList/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route
            path="/"
            element={<SignIn/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
  );
  
}

export default App;
