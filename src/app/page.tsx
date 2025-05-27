"use client";
import Navbar from "./components/navbar";
import styles from "./page.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioPage from "./pages/inicio";

export default function Home() {
  return (
    <BrowserRouter >
      <div className={styles.page}>
        <Navbar />

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/acerca" element={<h1>Acerca de</h1>} />
            <Route path="/contacto" element={<h1>Contacto</h1>} />
            <Route path="*" element={<h1>Página no encontrada</h1>} />
          </Routes>
        </main>
        <footer>
          <p>© 2025 Mi Sitio Web</p>

        </footer>
      </div>

    </BrowserRouter >
  );
}
