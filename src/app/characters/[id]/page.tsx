import Image from "next/image";

async function getCharacter(id: string) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) throw new Error("Personaje no encontrado");
  return res.json();
}

export default async function CharacterPage({ params }: { params: { id: string } }) {
  const character = await getCharacter(params.id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{character.name}</h1>
      <Image src={character.image} alt={character.name} width={300} height={300} className="rounded" />
      <p className="mt-2"><strong>Estado:</strong> {character.status}</p>
      <p><strong>Especie:</strong> {character.species}</p>
      <p><strong>Origen:</strong> {character.origin.name}</p>
    </div>
  );
}
