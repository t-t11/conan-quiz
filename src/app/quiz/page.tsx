import Link from "next/link";
import { Container } from "../components/Container";
import { getRandomNum } from "@/lib/dataNum";

export default async function Page() {
  const randomNumber = getRandomNum().toString();
  return (
    <Container as="div">
      <h1>Quiz page</h1>
      <Link href={`/quiz/${randomNumber}`}>Challenge Quiz</Link>
    </Container>
  );
}
