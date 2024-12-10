import React, { useState } from 'react';

import styles from "./Navbar.module.css";

import {getImageUrl }from "../../utils";

export const Navbar = () => {
    return( 
        
        <nav className={styles.navbar}>
            <img className={styles.logo}src={getImageUrl("nav/logo_1.png")} alt="logo" />
            <a className={styles.title} href="/">Hackistosh</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")} alt="menu-btn" />
            </div>

        </nav>
    )
    

}