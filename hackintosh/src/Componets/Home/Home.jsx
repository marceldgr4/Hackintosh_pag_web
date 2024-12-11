import React from "react";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <section className={styles.container} id="Home">
      <h1 className={styles.title}>Bienvenido</h1>
      <div className={styles.contentWrapper}>
        {/* Imagen del lado izquierdo */}
        <div className={styles.imageWrapper}>
          <img src={getImageUrl("People/people1.png")} alt="persona" className={styles.image} />
        </div>

        {/* Texto del lado derecho */}
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            Esto es un pequeño proyecto web para dar una guía en español para aquellas personas
            curiosas por la tecnología y que les gusta este mundo. Aprender cómo realizar una
            instalación de macOS en equipos que son compatibles, donde tiene la oportinidad de 
            transformar tu equipo que trabaja con Windows a tener una iMac, MacBook Pro, MacBook Air, Mac Mini.
            <br />
            <br />
            Recuerda que cada equipo tiene su retos y configuración. Para eso, aquí tienes la guía donde
            puedes encontrar mayor información para configuración esta la "Guia de Dortania".
          </p>
        </div>
      </div>
    </section>
  );
};
