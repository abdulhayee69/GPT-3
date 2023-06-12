import React from 'react';
import { Brand, CTA, Navbar } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT69, Header } from './containers'; 
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT69 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
