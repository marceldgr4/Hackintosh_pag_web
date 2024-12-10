import React,{useState} from "react";
import { Link, useLocation } from 'react-router-dom';
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar=()=>{
    const [menuOpen,setmenuOpen]=useState(false);
    
    const isHomePage = location.pathname === '/';
    const handleMenuToggle = () => setMenuOpen(!menuOpen);

    return(
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img 
                    className={styles.logo} 
                    src={getImageUrl("nav/logo_1.png")} 
                    alt="Logo Hackintosh" 
                />
                {isHomePage ? (
                    <a className={styles.title} href="/">Hackintosh</a>
                ) : (
                    <Link to="/" className={styles.title}>Hackintosh</Link>
                )}
            </div>
         
            
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={
                    menuOpen 
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
                }
                alt="menu-button" onClick={()=>setmenuOpen(!menuOpen)}
                    
                    />
                <ul className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}
                onClick={()=>setmenuOpen(false)}
                >

                    <li><a href="#home">Inicion</a></li>
                    <li><a href="https://dortania.github.io/OpenCore-Install-Guide/">Guia dortania</a></li>
                    <li><a href="#MacOS">macOS</a></li>
                    <li><a href="#Herramientas">Herramientas</a></li>
                    <li><a href="#Equipos">Equipos</a></li>
                    <li><a href="#Tienda">Tienda</a></li>
                </ul>
            </div>
        </nav>
    )
}