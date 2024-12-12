import React from "react";
import styles from "./Usb.module.css"
import { getImageUrl } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Usb =()=>{
    const navigate = useNavigate();

    const handleGoToProjects = () => {
        navigate("/#Home"); 
    };
    return(
        <div>
            <section className={styles.container} id= "Usb">
                <h1 className={styles.title}>Creacion de USB</h1>
                <p>Este proceso se va realiazr desde MacOS. tambien esta desde la version de windows</p>
                <h3>Requitos</h3>               
                <p>Usb de 32GB para Sequoia, para otras versiones 16GB esta perfecto.</p>
                <div className={styles.usb}>
                    <img src={getImageUrl("Usb/usb1.png")} alt="usb" />
                    <p>recuendad que debe esta estar formatidad de esta forma </p>
                    <img src={getImageUrl("Usb/Utilidad.png")} alt="" />
                </div>
                <br />
                <p>a ver el contiendo del instalador de Sequoia click derecho mostrar contenido seleccionamos el 
                    archivo con nombre createinstallmedia.
                    </p>
                 <div className={styles.contents}>
                    <img src={getImageUrl("Usb/installs.png")} alt="" />
                    <img src={getImageUrl("Usb/contents.png")} alt="" />
                </div>   

            </section>
        </div>

    )
}