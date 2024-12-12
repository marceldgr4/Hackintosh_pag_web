import React from "react";
import styles from "./win.module.css";
import { useNavigate } from "react-router-dom";

export const Win =()=>{
    const navigate = useNavigate();
    
    const handleGoToProjects = () => {
        navigate("/#Usb"); 
    };
    return(
        <section className={styles.container} id="Win">
            <h1>window</h1>
        </section>
    );
}