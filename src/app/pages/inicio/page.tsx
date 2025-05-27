import React from "react";
import styles from "./inicio.module.css"; // Asegúrate de que este archivo exista y tenga estilos adecuados

const InicioPage = () => {
    return (
        <div className={styles.content}>
            <img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="" height="200" />
            <p>Bienvenido a la página proyecto para programacion web II.</p>
            <p>Somos:  </p>
            <p>Estudiante - Alan</p>
            <p>Estudisnte - Israel Elias Murillo Flores</p>
            <p>Sobre nuestro proyecto, usamos una api para</p>
            <p>mostrar los capitulos, planetas y otros de la serie</p>
            <p>Rick y Morty</p>
        </div>
    );
}

export default InicioPage;