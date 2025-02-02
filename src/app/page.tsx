import ParallaxPixelStars from "@/app/effects/stars";
import Image from "next/image";
import CharacterSearch from "@/app/components/CharacterSearch";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ParallaxPixelStars />
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Rick and Morty" width={500} height={100} />
        <h1 className="invisible">Rick and Morty</h1>
        <CharacterSearch />
      </main>
    </div>
  );
}
