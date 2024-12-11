import React from 'react'

import styles from "./App.module.css"; 
import{ Home} from "./componets/Home/Home";

import { Navbar } from "./Componets/Navbar/Navbar";


function App() {
 

  return (
   
    <div className={styles.App}>
       <Navbar/> 
       <Home/>
       
    </div>
    
   
  );
};

export default App;
