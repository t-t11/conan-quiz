import data from "@/data/quiz.json";

export const dataLength = () => {
  return data.data.length;
};

export const getRandomNum = () => {
  const dataLength = data.data.length;
  const randomNum = Math.floor(Math.random() * dataLength) + 1;
  return randomNum;
};

export const getQuiz = (id) => {
  const num = Number(id) - 1;
  const quizData = data.data[num];
  return quizData;
};
