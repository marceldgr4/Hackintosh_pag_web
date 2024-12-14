import React from 'react'

import styles from "./App.module.css"; 
import{ Home} from "./component/Home/Home";
import{ Macos } from "./component/Mac/Macos";
import{ Usb } from "./component/Usb/Usb";


import { Navbar } from "./component/Navbar/Navbar";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Win } from './component/Wind/Win';
import { Equipo } from './component/Equipos/Equipo';
function App() {
 

  return (
    <Router>
      <div className ={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={
           <>
          <section id="Home"><Home /></section>
          <section id= "Macos"><Macos /></section>
          </>        
        } 
        
        />


           <Route path= "/Usb" element={<Usb/>}/>
           <Route path="/Win" element={<Win/>}/>
           <Route path="/Equipo" element={<Equipo/>}/>
        
      </Routes>
      </div>
      </Router>
     
    
   
  );
};

export default App;
