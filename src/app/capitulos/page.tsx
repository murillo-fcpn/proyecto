"use client";
import { useEffect, useState } from "react";

interface Capitulo {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export default function Capitulos() {
  const [capitulos, setCapitulos] = useState<Capitulo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => {
        setCapitulos(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando capítulos...</div>;
  }

  return (
    <div>
      <h1>Capítulos</h1>
      <ul>
        {capitulos.map((cap) => (
          <li key={cap.id} style={{ marginBottom: 16 }}>
            <strong>{cap.episode}:</strong> {cap.name} <br />
            <span>Fecha de emisión: {cap.air_date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}