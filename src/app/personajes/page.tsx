"use client";
import { useEffect, useState } from "react";
import TarjetaPersonaje from "@/components/TarjetaPersonaje";
import Image from "next/image";

interface Personaje {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  origin: {
    name: string;
  };
}

export default function Personajes() {
  const url: string = "https://rickandmortyapi.com/api/character";

  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState<Personaje>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (personaje: Personaje) => {
    setPersonajeSeleccionado(personaje);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setPersonajeSeleccionado(null);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      <h1>Personajes</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {personajes.map((p) => (
          <TarjetaPersonaje
            key={p.id}
            nombre={p.name}
            imagen={p.image}
            especie={p.species}
            onClick={() => handleCardClick(p)}
          />
        ))}
      </div>

      {modalOpen && personajeSeleccionado && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(38, 117, 57, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 8,
              minWidth: 300,
              position: "relative",
              backgroundColor: "#000000",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "transparent",
                border: "none",
                fontSize: 20,
                cursor: "pointer",
              }}
              onClick={handleCloseModal}
            >
              ×
            </button>
            <h2>{personajeSeleccionado.name}</h2>
            {/* <img src={personajeSeleccionado.image} alt={personajeSeleccionado.name} style={{ width: 150 }} /> */}
            <Image
              src={personajeSeleccionado.image}
              alt={personajeSeleccionado.name}
              width={200}
              height={200}
            />
            <p>Especie: {personajeSeleccionado.species}</p>
            <p>Estado: {personajeSeleccionado.status}</p>
            <p>Género: {personajeSeleccionado.gender}</p>
            <p>Origen: {personajeSeleccionado.origin?.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
