import React from 'react'

import styles from './App.module.css'
import { Navbar } from './Componets/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <>
    <div className={styles.App}>
       <Navbar/> 
    </div>
    
    </>
  )
}

export default App
