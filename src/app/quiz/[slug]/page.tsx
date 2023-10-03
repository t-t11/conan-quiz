import { Container } from "../../components/Container";
import QuizSection from "../../components/QuizSection";
import { dataLength, getQuiz } from "@/lib/dataNum";

export async function generateStaticParams() {
  const questionLength = dataLength();
  const array: Array<number> = [];
  for (let i = 1; i <= questionLength; i++) {
    array.push(i);
  }
  return array.map((id) => {
    slug: id;
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const quiz = getQuiz(slug);
  return (
    <Container as="main">
      <h1 className="mb-4">
        Quiz.{params.slug} {quiz.title}
      </h1>
      <QuizSection quiz={quiz} slug={slug} />
    </Container>
  );
}
