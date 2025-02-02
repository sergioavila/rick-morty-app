import ParallaxPixelStars from "@/app/effects/stars";
import Image from "next/image";
import Form from "next/form";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ParallaxPixelStars />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Rick and Morty" width={500} height={100} />
        <h1 className="invisible">Rick and Morty</h1>
        <Form>
          <input type="text" placeholder="Search" className="p-4 rounded-md w-full block border-2 border-cyan-600 shadow-lg shadow-cyan-500/50 bg-[#0000006e] text-white" />
        </Form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
