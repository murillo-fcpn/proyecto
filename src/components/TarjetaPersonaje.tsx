// Componente de tarjeta para mostrar un personaje
import React from "react";

interface TarjetaPersonajeProps {
  nombre: string;
  imagen: string;
  especie: string;
}

const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ nombre, imagen, especie }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, textAlign: "center", width: 200 }}>
      <img src={imagen} alt={nombre} style={{ width: "100%", borderRadius: 8 }} />
      <h3>{nombre}</h3>
      <p>{especie}</p>
    </div>
  );
};

export default TarjetaPersonaje;
