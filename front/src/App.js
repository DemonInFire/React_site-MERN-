import React from 'react'
import s from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import RegistrationContainer from './components/content/registration/RegistrationContainer'
import Footer from './components/footer/footer'
import {Route} from 'react-router-dom'

const App = () => {
  return (
    <div className = {s.BackgroundImg}>
      <Route path='/registration'><RegistrationContainer /></Route>
      <Footer />
    </div>
  )
}

export default App