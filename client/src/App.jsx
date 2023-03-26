import React, { useState } from 'react'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialMediaLinks from './components/SocialMediaLinks'
import axios from 'axios'


const App = () => {

  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
  axios.defaults.withCredentials = true;

  return (

    <div>
      <Navbar />
      <SocialMediaLinks />
      <Home />
      <Skills />
      <Projects />
      <Contact />

    </div>

  )
}

export default App
