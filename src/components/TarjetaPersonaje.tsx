import React from "react";

interface TarjetaPersonajeProps {
  nombre: string;
  imagen: string;
  especie: string;
  onClick: () => void;
}

const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ nombre, imagen, especie, onClick }) => {
  return (
    <div onClick={onClick} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, textAlign: "center", width: 200 }}>
      <img src={imagen} alt={nombre} style={{ width: "100%", borderRadius: 8 }} />
      <h3>{nombre}</h3>
      <p>{especie}</p>
    </div>
  );
};

export default TarjetaPersonaje;