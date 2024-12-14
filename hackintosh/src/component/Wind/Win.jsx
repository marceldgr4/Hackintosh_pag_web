import React from "react";
import styles from "./win.module.css";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils";

export const Win =()=>{
    const navigate = useNavigate();
    
    
    return(
        <section className={styles.container} id="Win">
           
            <h1 className={styles.title}>Haciendo el instalador en Windows</h1>
            <p className={styles.text}> Para la instalación de macOS, para usar OpenCore, es prefierible tener una nueva EFI con sus actualizaciones 
                del gestor de arranque. </p>
            <h2 className={styles.subt}> Para empezar, necesitarás lo siguiente:</h2>
            <img className={styles.usb} src={getImageUrl("Usb/usb1.png")} alt="usb" />
            <p className={styles.text}> Memoria USB de 4 GB</p>
            <ul>
                <li><a href="https://github.com/acidanthera/OpenCorePkg/releases">macrecovery.py</a></li>
                 <li>Esto requerirá la instalación de <a href="https://www.python.org/downloads/"> -- Python- </a></li>
             </ul>
             <br />
             <p className={styles.text}>
             Descarga de macOS
             Para agarrar instaladores heredados es súper fácil, 
             primero coge una copia de OpenCorePkg y dirígete a /Utilities/macrecovery/. 
             A continuación, copia la ruta de la carpeta de la carpeta macrecovery:
             </p>
             <img className={styles.util} src="https://dortania.github.io/OpenCore-Install-Guide/assets/img/open-cmd-current-folder.906148d4.gif" alt="" />
             <p className={styles.text}>
            Ahora ejecuta una de las siguientes opciones dependiendo de la versión de macOS que quieras (tenga en cuenta que estos scripts dependen de Python 
            (abre una nueva ventana), por favor, instálelo si aún no lo ha hecho):
            </p>
            <img className={styles.img0} src={getImageUrl("windows/01.png")} alt="" />
            <p className={styles.text}>
                macOS 15, Sequoia Nota: Como este sistema operativo es bastante nuevo, 
                todavía hay algunos problemas con ciertos sistemas que resolver. 
                Para los usuarios primerizos, recomendamos macOS  Big Sur (11)
                PRECAUCIÓN: Con macOS 11.3 y versiones posteriores, XhciPortLimit se rompe, lo que provoca bucles de arranque (abre una nueva ventana). Recomendamos a los usuarios que instalen un sistema operativo más antiguo (es decir, macOS 10.15, Catalina) o que encuentren un instalador de Big Sur 11.2.3 o anterior.
                revisar  de forma mas detalla la guía Dortania:
            </p>
            <img className={styles.img} src={getImageUrl("windows/011.png")} alt="" />
            <div className={styles.cont2}>
                <h2 className={styles.subt}>
                    Método de gestión de discos
                 </h2>
                 <p className={styles.text}>
                 Simplemente abra Administración de discos y formatee su USB como FAT32: 
                 
                 Si tiene varias particiones en el USB, haga clic con el botón derecho en cada partición y haga 
                 clic en Eliminar volumen para su USB (esto eliminará datos, se asegurará de tener copias de seguridad y solo eliminará particiones de su USB) 
                 Haz clic con el botón derecho en el espacio no asignado y crea un nuevo volumen simple. Asegúrate de que sea 
                 FAT32 y al menos uno o dos gigabytes grandes. asignaerle el nombre "EFI". De lo contrario, haga clic con el botón derecho en la partición del USB y 
                 haga clic en Formato y configírela en FAT32.
                 A continuación, ve a la raíz de esta unidad USB y crea una carpeta llamada com.apple.recovery.boot. 
                 A continuación, mueva los archivos BaseSystem o RecoveryImage descargados.  
                 </p>
                 <img className={styles.img} src={getImageUrl("windows/07.png")} alt="" />
                 <img className={styles.img} src={getImageUrl("windows/012.png")} alt="" />
                 <img className={styles.img}src={getImageUrl("windows/010.png")} alt="" />
                 <p className={styles.text}>
                 Ahora coge OpenCorePkg que descargaste antes y ábrelo.
                    X64 (CPU de 64 bits),  A continuación, coge la carpeta EFI dentro y colócala en la 
                    raíz de la unidad USB junto a com.apple.recovery.boot. NOTA: Recuerda que la capeta EFI 
                    debe esta configurado para tu equipo con los KEXT, SSDT, y CONFIG modificado.
                    SI no tiene echo eso revisa detalladamente la guia de dortania   
                 </p>
                 <img className={styles.img} src={getImageUrl("windows/05.png")} alt="" />
                

            </div>
            

            
            

        </section>
    );
}