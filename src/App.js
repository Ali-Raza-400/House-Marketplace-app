import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import Offer from './pages/Offer'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import { ToastContainer, toast } from 'react-toastify';
import SignUp from './pages/SignUp'
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Explore/>} />
          <Route path='/offers' element={<Offer/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  )
}

export default App