import data from "@/data/quiz.json";

export const dataLength = () => {
  return data.data.length;
};

export const getRandomNum = (slug) => {
  const dataLength = data.data.length;
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * dataLength) + 1;
  } while (randomNum === slug);
  return randomNum;
};

export const getQuiz = (id) => {
  const num = Number(id) - 1;
  const quizData = data.data[num];
  return quizData;
};
