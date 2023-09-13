import { getAuthSession } from '@/utils/auth';
import { prisma } from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

// fetch all orders

export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (session) {
    try {
      if (session.user)
        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: 'SOMETHING went wrong' }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(JSON.stringify({ message: 'You are not auth.' }), {
      status: 401,
    });
  }
};

export const POST = () => {
  return new NextResponse('Hello', { status: 200 });
};
