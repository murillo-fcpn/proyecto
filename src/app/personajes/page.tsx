"use client";
import { useEffect, useState } from "react";
import TarjetaPersonaje from "@/components/TarjetaPersonaje";

export default function Personajes() {
  const url: string = "https://rickandmortyapi.com/api/character";

  const [personajes, setPersonajes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      <h1>Personajes</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {personajes.map((p) => (
          <TarjetaPersonaje key={p.id} nombre={p.name} imagen={p.image} especie={p.species} />
        ))}
      </div>
    </div>
  );
}
