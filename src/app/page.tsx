import Image from "next/image";
import Link from "next/link";
import { Container } from "./components/Container";

const imageUrl =
  "https://www.conan-movie.jp/download/wallpaper/conan_Android_partyB.png";

export default function Home() {
  return (
    <Container as="main">
      <div className="flex flex-col items-center gap-6 bg-[#f2f4a5] px-8 py-20">
        <h1 className="font-mono text-xl font-semibold">
          Welcome to Detective Conan Quiz!!!
        </h1>
        <Image
          src={imageUrl}
          alt="conan quiz image"
          height={300}
          width={300}
          className="aspect-auto"
          priority
        />
        <Link
          href="/quiz"
          className="flex items-center justify-center gap-1 rounded-md bg-[#BC7AF9] px-5 py-4 font-semibold text-blue-50  transition-colors duration-500 hover:bg-[#a155e9]"
        >
          Quiz Start!
        </Link>
      </div>
    </Container>
  );
}
