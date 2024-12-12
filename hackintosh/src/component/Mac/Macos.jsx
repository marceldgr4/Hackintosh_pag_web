import React from "react";
import styles from "./Macos.module.css";
import { getImageUrl } from "../../utils";

export const Macos = () => {
  return (
    <section className={styles.container} id="Macos">
      {/* Título y descripción */}
      <div className={styles.header}>
        <h1 className={styles.title}>Sistemas Operativos MacOS</h1>
        <p className={styles.text1}>
          Estos son los más recientes que se encuentran disponibles para los nuevos modelos.
        </p>
      </div>

      {/* Contenido principal: imagen e íconos */}
      <div className={styles.content}>
        {/* Imagen a la izquierda */}
        <img
          className={styles.personImg}
          src={getImageUrl("People/people2.png")}
          alt="persona"
        />
        

        {/* Íconos de sistemas operativos */}
        <div className={styles.soIcons}>
          <div className={styles.icon}>
            <img src={getImageUrl("SO/monterey.png")} alt="Monterey" />
            <p>Monterey</p>
          </div>
          <div className={styles.icon}>
            <img src={getImageUrl("SO/ventura.png")} alt="Ventura" />
            <p>Ventura</p>
          </div>
          <div className={styles.icon}>
            <img src={getImageUrl("SO/sonoma.png")} alt="Sonoma" />
            <p>Sonoma</p>
          </div>
          <div className={styles.icon}>
            <img src={getImageUrl("SO/sequoia.png")} alt="Sequoia" />
            <p>Sequoia</p>
          </div>
        </div>
    
      </div>
      
      <div className={styles.text2}>
            <p>
            Desde una equipo con macOS ser puede realizar la descarga el instlardor, segun la version requiera 
            del sistema operativo. Para las máquinas que necesitan una versión 
            específica del sistema operativo o que no se pueden descargar de la App Store, puede utilizar esta opcion.
            </p>
            <div className={styles.iconD}>
             <img src={getImageUrl("SO/descarga.png")} alt="descarga" />
        </div>
          
            <br />
            <p>Abra una ventana de terminal, luego copie y pegue el siguiente comando:</p>
            <br />
            <p className={styles.text4}>softwareupdate --list-full-installers; echo; echo "Please enter version number you wish to download:"; read REPLY; [ -n "$REPLY" ] && softwareupdate --fetch-full-installer --full-installer-version "$REPLY"</p>
        </div>
        <div className={styles.img3}>
            <img className={styles.terminal} src={getImageUrl("SO/terminal.png")} alt="terminal" />
            <img className={styles.terminal} src={getImageUrl("SO/terminal2.png")} alt="terminal 2" />
            
        </div>
    </section>
  );
};
