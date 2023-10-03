import questions from '@/data/quiz.json';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    const quizdataLength = questions.data.length;
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * quizdataLength) + 1;
    } while (Number(params.id) === randomNumber);

    if (!quizdataLength) {
      return new NextResponse('not found', { status: 404 });
    }

    return NextResponse.json({
      randomNumber,
      quizdataLength,
    });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
