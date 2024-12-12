import React from "react";
import styles from "./Usb.module.css";
import { getImageUrl } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Usb = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className={styles.container} id="Usb">
        <h1 className={`${styles.title} ${styles.highlightedTitle}`}>Creación de USB</h1>
        <h3 className={styles.h2}>
          Este proceso se realiza desde macOS, aunque también está disponible para Windows.
        </h3>
        <br />
        <h2 className={styles.subt}>Requisitos</h2>
        <br />
        <p className={styles.txt1}>
          Es necesario una USB de 32GB para macOS Sequoia, pero para otras versiones, una de 16GB es suficiente.
        </p>
        <br />
        <div className={styles.usb}>
          <img src={getImageUrl("Usb/usb1.png")} alt="USB" />
          <p>Recuerda que debe estar formateada de la siguiente manera:</p>
          <img className={styles.img1} src={getImageUrl("Usb/Utilidad.png")} alt="Utilidad de disco" />
        </div>
        <br />
        <p className={styles.txt1}>
          Para ver el contenido del instalador de Sequoia, haz clic derecho, selecciona "Mostrar contenido del paquete" y busca el archivo llamado
          <strong> createinstallmedia</strong>.
        </p>
        <div className={styles.contents}>
          <img src={getImageUrl("Usb/installs.png")} alt="Instaladores" />
          <img src={getImageUrl("Usb/contents.png")} alt="Contenidos" />
          <img src={getImageUrl("Usb/resources.png")} alt="Recursos" />
          <img src={getImageUrl("Usb/Terminal.png")} alt="Terminal" />
        </div>
        <div className={styles.nota}>
          <img src={getImageUrl("People/people3.png")} alt="Personas" />
          <p className={styles.txt2}>
            Recuerda que la carpeta EFI debe estar configurada para tu equipo con los archivos KEXT, SSDT, y el archivo CONFIG modificado.
            Si no lo has hecho, aquí tienes un enlace para su configuración.
          </p>
        </div>
        <br />
        <div className={styles.windows}>
          <h1 className={styles.title}>Creación desde Windows</h1>
          <img src={getImageUrl("windows/Windows.png")} alt="Windows" />
        </div>
      </section>
    </div>
  );
};
