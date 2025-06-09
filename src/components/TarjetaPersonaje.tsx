import React from "react";
import Image from "next/image"; // Importa el componente Image


interface TarjetaPersonajeProps {
  nombre: string;
  imagen: string;
  especie: string;
  onClick: () => void;
}

const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ nombre, imagen, especie, onClick }) => {
  return (
    <div onClick={onClick} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, textAlign: "center", width: 200 }}>
      {/* <img src={imagen} alt={nombre} style={{ width: "100%", borderRadius: 8 }} /> */}
      <Image
        src={imagen}
        alt={nombre}
        width={150} // Ajusta el tamaño según lo que necesites
        height={120}
        style={{ borderRadius: 8, objectFit: "cover" }}
      />
      <h3>{nombre}</h3>
      <p>{especie}</p>
    </div>
  );
};

export default TarjetaPersonaje;