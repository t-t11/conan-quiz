import quizes from '@/data/quiz.json';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    const quiz = quizes.data.find((item) => item.id === params.id);

    if (!quiz) {
      return new NextResponse('not found', { status: 404 });
    }

    return NextResponse.json({
      quiz: quiz,
    });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
