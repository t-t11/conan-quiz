"use client";

import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdNearbyError } from "react-icons/md";
import { MdFactCheck } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { getRandomNum } from "@/lib/dataNum";

type quiz = {
  id: string;
  title: string;
  answers: Array<string>;
  correct_answer: string;
};

export default function QuizSection({
  quiz,
  slug,
}: {
  quiz: quiz;
  slug: string;
}) {
  const { answers, correct_answer } = quiz;

  const [selected, setSelected] = useState(false);
  const [answer, setAnswer] = useState("");
  const [randomNumber, setRandomNumber] = useState<number>();

  useEffect(() => {
    if (selected) {
      const randomNumber = getRandomNum(slug);
      setRandomNumber(randomNumber);
    }
  }, [selected, slug]);

  return (
    <>
      <ul className="grid w-1/2 grid-cols-2 gap-2 md:grid-cols-4">
        {answers.map((item: string) => {
          const isCorrect = answer === correct_answer;
          return (
            <li key={answers.indexOf(item)}>
              <button
                disabled={selected}
                className={classNames(
                  "flex w-full items-center justify-center rounded-md px-8 py-6 text-base font-medium transition-all",
                  item !== answer && "bg-white",
                  item === answer && !isCorrect && "bg-red-500",
                  item === answer && isCorrect && "bg-green-500",
                )}
                onClick={() => {
                  setSelected(true);
                  setAnswer(item);
                }}
                value={answer}
              >
                {item}
                {item === answer && !isCorrect && <MdNearbyError />}
                {item === answer && isCorrect && <MdFactCheck />}
              </button>
            </li>
          );
        })}
      </ul>
      {randomNumber && (
        <Link
          href={`/quiz/${randomNumber}`}
          className="mt-4 flex items-center gap-1 rounded-md border border-black bg-white p-2"
        >
          <BsFillArrowRightSquareFill />
          次の問題
        </Link>
      )}
    </>
  );
}
