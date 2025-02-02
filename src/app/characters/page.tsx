import Link from "next/link";

async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) throw new Error("Error al obtener los personajes");
  return res.json();
}

export default async function CharactersPage() {
  const data = await getCharacters();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Personajes de Rick & Morty</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.results.map((char: any) => (
          <Link key={char.id} href={`/characters/${char.id}`} className="border p-4 rounded">
            <img src={char.image} alt={char.name} className="w-full rounded" />
            <p className="text-center mt-2 font-semibold">{char.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
