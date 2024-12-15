import React from "react";
import styles from "./win.module.css";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils";

export const Win = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.container} id="Win">
      <h1 className={styles.title}>Haciendo el instalador en Windows</h1>
      <p className={styles.text}>
        Para la instalación de macOS usando OpenCore, es preferible tener una nueva EFI con sus actualizaciones del gestor de arranque.
      </p>
      <h2 className={styles.subt}>Para empezar, necesitarás lo siguiente:</h2>
      <img className={styles.usb} src={getImageUrl("Usb/usb1.png")} alt="USB" />
      <p className={styles.text}>Memoria USB de al menos 4 GB</p>
      <ul>
        <li>
          <a href="https://github.com/acidanthera/OpenCorePkg/releases" target="_blank" rel="noopener noreferrer">
            macrecovery.py
          </a>
        </li>
        <li>
          Esto requerirá la instalación de{" "}
          <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">
            Python
          </a>
        </li>
      </ul>
      <p className={styles.text}>
        Descarga de macOS: Para obtener instaladores heredados, primero descarga una copia de OpenCorePkg y dirígete a <code>/Utilities/macrecovery/</code>. Luego, copia la ruta de la carpeta *macrecovery*:
      </p>
      <img className={styles.util} src="https://dortania.github.io/OpenCore-Install-Guide/assets/img/open-cmd-current-folder.906148d4.gif" alt="Ruta macrecovery" />
      <p className={styles.text}>
        Ejecuta una de las opciones dependiendo de la versión de macOS que quieras instalar. Estos scripts dependen de Python, así que asegúrate de tenerlo instalado.
      </p>
      <img className={styles.img} src={getImageUrl("windows/01.png")} alt="macOS Opciones" />
      <p className={styles.text}>
        **Nota**: Para macOS 15 (Sequoia), se recomienda usar una versión más estable como macOS Big Sur (11) si eres principiante. Algunas versiones como macOS 11.3 pueden presentar problemas.
      </p>
      <div className={styles.cont2}>
        <h2 className={styles.subt}>Método de gestión de discos</h2>
        <p className={styles.text}>
          Abre *Administración de discos* en Windows y formatea tu USB como FAT32:
          <br />
          Si tiene varias particiones, haz clic derecho en cada una y selecciona *Eliminar volumen*. Luego, crea un nuevo volumen simple, asegúrate de que sea FAT32 y dale un tamaño mínimo de 1 GB. Nombra la partición como "EFI".
        </p>
        <img className={styles.img} src={getImageUrl("windows/07.png")} alt="Gestión de discos" />
        <p className={styles.text}>
          Una vez hecho esto, ve a la raíz de la unidad USB y crea una carpeta llamada <code>com.apple.recovery.boot</code>. Mueve los archivos descargados como *BaseSystem* o *RecoveryImage* dentro de esta carpeta.
        </p>
        <img className={styles.img} src={getImageUrl("windows/012.png")} alt="Carpeta USB" />
        <p className={styles.text}>
          Luego, toma la carpeta EFI del paquete OpenCorePkg que descargaste previamente y colócala junto a <code>com.apple.recovery.boot</code> en la raíz de tu USB. **Recuerda**: Configura los archivos KEXT, SSDT y CONFIG correctamente para tu equipo antes de proceder.
        </p>
        <img className={styles.img} src={getImageUrl("windows/05.png")} alt="Carpeta EFI" />
      </div>
    </section>
  );
};
