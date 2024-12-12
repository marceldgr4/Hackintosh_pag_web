import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Importar react-scroll
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Obtener la ubicación actual
  const isHomePage = location.pathname === '/';

  const handleMenuToggle = () => setMenuOpen((prevState) => !prevState);

  return (
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
        <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
          alt={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={handleMenuToggle}
        />
        <ul className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`} onClick={handleMenuToggle} >
            {isHomePage ?(
                 // Enlaces de desplazamiento interno en la página principal
                 
                <>
                <li><ScrollLink to="Home" smooth={true} duration={500} > Inicio</ScrollLink></li>
                <li><a href="https://dortania.github.io/OpenCore-Install-Guide/"  target="_blank" rel="noopener noreferrer">Guía Dortania</a></li>
                <li><ScrollLink to="Macos" smooth={true} duration={500} > MacOS </ScrollLink> </li>
                <li><Link to="Usb" >Crear USB </Link> </li>
                <li><Link to="Efi"  >Crear Efi </Link> </li> 
                <li><Link to="Herramientas"  > Herramientas </Link> </li>
                <li><Link to="Equipos"  >Equipos</Link> </li>
                <li><Link to="Tienda"  >Tienda</Link> </li>
                </>
            ):(
                // Navegación con redirección a la página principal y desplazamiento
                <>
                <li><Link to="/#Home" onClick={() => window.location.href = "/#Home"}>Inicio</Link></li>
                <li><Link to="/#Macos" onClick={() => window.location.href = "/#Macos"}>MacOS</Link></li>
                <li><Link to="/#Usb" onClick={() => window.location.href = "/#Usb"}>Crear USB</Link></li>
                <li><Link to="/#Efi" onClick={() => window.location.href = "/#Eif"}>Crear EFI</Link></li>
                

                </>
            )}
          
         
        </ul>
      </div>
    </nav>
  );
};
