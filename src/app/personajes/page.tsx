export default function Personajes() {
  const url: string = "https://rickandmortyapi.com/api/character";
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  fetchData();
  return (<div>
    <h1>Acerca de</h1>
    <p>aca esta la informacion</p>
  </div>
  );
}
