import { getAuthSession } from '@/utils/auth';
import { prisma } from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

// fetch all orders

export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: session.user.email
  //   }
  // })

  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = prisma.order.findMany({
        where: {
          userEmail: session.user.email!,
        },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
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
