import Link from "next/link";
import { Container } from "../components/Container";
import { getRandomNum } from "@/lib/dataNum";

export default async function Page() {
  const randomNumber = getRandomNum(1).toString();
  return (
    <Container as="div">
      <h1 className="mb-2 font-mono text-xl font-semibold">
        Click to Start Quiz!
      </h1>
      <Link
        href={`/quiz/${randomNumber}`}
        className="rounded-md border-2 border-none bg-red-500 px-2 py-4 drop-shadow-md active:-translate-x-0.5 active:translate-y-0.5"
      >
        Challenge Quiz
      </Link>
    </Container>
  );
}
