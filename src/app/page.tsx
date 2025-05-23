"use client";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function Home() {

  return (
    <BrowserRouter >
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<h1>Inicio</h1>} />
            <Route path="/acerca" element={<h1>Acerca de</h1>} />
            <Route path="/contacto" element={<h1>Contacto</h1>} />
            <Route path="*" element={<h1>Página no encontrada</h1>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter >
  );
}
