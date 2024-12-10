import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import styles from "./Navbar.module.css";

import {getImageUrl }from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Determina si estás en la página principal o no
    const isHomePage = location.pathname === '/';

    // Cierra el menú al hacer clic en cualquier enlace
    const handleMenuToggle = () => setMenuOpen(!menuOpen);

    return (
        <nav className={styles.navbar}>
             
             
            {/* Título del sitio */}
            {isHomePage ? (
                <>
                
                <img className ={styles.logo} src={getImageUrl("nav/logo_1.png")} alt="LOGO" />
               
               
                <ScrollLink className={styles.title} to="home" smooth={true} duration={500}>
                    Hackintosh
                </ScrollLink>
               </>
            ) : (
                <Link to="/" className={styles.title}>Hackinstosh</Link>
            )}

            {/* Menú móvil */}
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt="menu-button" 
                    onClick={handleMenuToggle} 
                />

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={handleMenuToggle}>
                    {isHomePage ? (
                        // Enlaces de desplazamiento interno en la página principal
                        <>
                            <li><ScrollLink to="home" smooth={true} duration={500}>Inicio</ScrollLink></li>
                            
                        </>
                    ) : (
                        // Navegación con redirección a la página principal y desplazamiento
                        <>
                            <li><Link to="/#home" onClick={() => window.location.href = "/#home"}>Inicio</Link></li>
                            
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};