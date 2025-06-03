"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link
              href="/"
              className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
            >
              Inicio
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/personajes"
              className={`${styles.navLink} ${pathname === '/personajes' ? styles.active : ''}`}
            >
              Personajes
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/contacto"
              className={`${styles.navLink} ${pathname === '/contacto' ? styles.active : ''}`}
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