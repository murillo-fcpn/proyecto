"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './navbar.module.css';

function Navbar() {
  const pathname = usePathname();

  return (
    <>
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
            {/* <li className={styles.navItem}>
              <Link
                href="/acerca"
                className={`${styles.navLink} ${pathname === '/acerca' ? styles.active : ''}`}
              >
                Acerca de
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/contacto"
                className={`${styles.navLink} ${pathname === '/contacto' ? styles.active : ''}`}
              >
                Contacto
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;