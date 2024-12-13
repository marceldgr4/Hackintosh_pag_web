import React from "react";
import styles from "./win.module.css";
import { useNavigate } from "react-router-dom";

export const Win =()=>{
    const navigate = useNavigate();
    
    
    return(
        <section className={styles.container} id="Win">
            <h1>Haciendo el instalador en Windows</h1>
            <p> Para la instalación de macOS, para usar OpenCore, es prefierible tener una nueva EFI con sus actualizaciones 
                del gestor de arranque.
            </p>
            <h2>
                Para empezar, necesitarás lo siguiente:
            </h2>
            <p>
            Memoria USB de 4 GB
            </p>
            <ul>
                <li><a href="https://github.com/acidanthera/OpenCorePkg/releases">macrecovery.py</a></li>
                 <li>Esto requerirá la instalación de <a href="https://www.python.org/downloads/"> -- Python- </a></li>
             </ul>
        </section>
    );
}