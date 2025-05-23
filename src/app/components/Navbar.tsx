"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'; // Importa tus estilos CSS Modules

function Navbar() {
  const location = useLocation(); // Hook para obtener la ubicación actual

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link
              to="/"
              className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
            >
              Inicio
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/acerca"
              className={`${styles.navLink} ${location.pathname === '/acerca' ? styles.active : ''}`}
            >
              Acerca de
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/contacto"
              className={`${styles.navLink} ${location.pathname === '/contacto' ? styles.active : ''}`}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;