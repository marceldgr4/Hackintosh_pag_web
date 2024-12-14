import React from "react";
import styles from "./Equipo.module.css";
import { getImageUrl } from "../../utils";

export const Equipo = () => {
  return (
    <section className={styles.container} id="Equipo">
      <h1 className={styles.title}>Selección un Equipo</h1>
      <br />
      <h2>es la configuracion para los ultimo modelo de procesadores intel</h2>
        <br />
      <div className={styles.conten}>
        <a
          href="https://dortania.github.io/OpenCore-Install-Guide/config.plist/comet-lake.html" // URL para Desktop
          target="_blank"
          rel="noopener noreferrer"
          className={styles.equipmentLink}
        >
          <img
            className={styles.img}
            src={getImageUrl("Equipo/desktop.png")}
            alt="Desktop"
          />
          <p className={styles.text}>Desktop</p>
        </a>

        <a
          href="https://dortania.github.io/OpenCore-Install-Guide/config-laptop.plist/icelake.html" // URL para Laptop
          target="_blank"
          rel="noopener noreferrer"
          className={styles.equipmentLink}
        >
          <img
            className={styles.img}
            src={getImageUrl("Equipo/laptop.png")}
            alt="Laptop"
          />
          <p className={styles.text}>Laptop</p>
        </a>
      </div>

      <img
        className={styles.people}
        src={getImageUrl("People/people4.png")}
        alt="Personaje"
      />
    </section>
  );
};
