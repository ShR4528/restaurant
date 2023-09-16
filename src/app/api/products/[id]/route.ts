import { getAuthSession } from '@/utils/auth';
import { prisma } from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

// get single product
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    return (
      new NextResponse(JSON.stringify(product)),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};

// delete single product

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const session = await getAuthSession();

  // Проверяем, является ли текущий пользователь администратором (если у вас есть система аутентификации)
  if (session?.user.isAdmin) {
    try {
      // Попытка удалить продукт из базы данных по его идентификатору (id)
      await prisma.product.delete({
        where: {
          id: id,
        },
      });

      // Если продукт успешно удален, возвращаем сообщение об успешном удалении в ответе
      return (
        new NextResponse(JSON.stringify('Product was deleted')), { status: 200 }
      );
    } catch (error) {
      // Если возникает ошибка при удалении, выводим ее в консоль и возвращаем сообщение об ошибке в ответе
      console.log(error);
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong' }),
        { status: 500 }
      );
    }
  }

  // Если пользователь не является администратором, возвращаем сообщение о запрете доступа
  return new NextResponse(JSON.stringify({ message: 'You are not allowed' }), {
    status: 403,
  });
};
