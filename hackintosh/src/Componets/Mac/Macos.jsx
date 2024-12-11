import React from "react";
import styles from "./Macos.module.css";
import { getImageUrl } from "../../utils";

export const Macos = () => {
  return (
    <section className={styles.container} id="Macos">
      {/* Título y descripción */}
      <div className={styles.header}>
        <h1 className={styles.title}>Sistemas Operativos MacOS</h1>
        <p className={styles.text}>
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
    </section>
  );
};
