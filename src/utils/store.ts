// Импорты зависимостей и типов данных
import { ActionTypes, CartType } from '@/types/types'; // Импортируем необходимые типы данных из модуля '@/types/types'
import { create } from 'zustand'; // Импортируем функцию create из библиотеки Zustand
import { persist } from 'zustand/middleware';

// Начальное состояние корзины пользователя
const INITIAL_STATE = {
  products: [], // Массив товаров в корзине (пустой по умолчанию)
  totalItems: 0, // Общее количество товаров в корзине (0 по умолчанию)
  totalPrice: 0, // Общая стоимость товаров в корзине (0 по умолчанию)
};

// Создаем хранилище состояния корзины пользователя с помощью Zustand
export const userCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      // Инициализация состояния корзины
      products: INITIAL_STATE.products, // Массив товаров
      totalItems: INITIAL_STATE.totalItems, // Общее количество товаров
      totalPrice: INITIAL_STATE.totalPrice, // Общая стоимость товаров

      // Действие для добавления товара в корзину
      addToCart(item) {
        const products = get().products;
        const productsInState = products.find(
          (product) => product.id === item.id
        );

        if (productsInState) {
          const updatedProducts = products.map(
            (product) =>
              product.id === productsInState.id
                ? {
                    ...item, // Создаем новый объект товара, объединяя его с новыми данными
                    quantity: item.quantity + product.quantity, // Увеличиваем количество товаров в корзине
                    price: item.price + product.price, // Увеличиваем общую стоимость товара
                  }
                : item // Если товар не нужно обновлять, оставляем его без изменений
          );
          set((state) => ({
            products: updatedProducts, // Обновляем массив товаров
            totalItems: state.totalItems + item.quantity, // Увеличиваем общее количество товаров в корзине
            totalPrice: state.totalPrice + item.price, // Увеличиваем общую стоимость товаров в корзине
          }));
        } else {
          set((state) => ({
            products: [...state.products, item], // Создаем новый массив товаров для избежания мутации
            totalItems: state.totalItems + item.quantity, // Увеличиваем общее количество товаров
            totalPrice: state.totalPrice + item.price, // Увеличиваем общую стоимость
          }));
        }
      },

      // Действие для удаления товара из корзины
      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== item.id), // Удаляем товар из массива по его id
          totalItems: state.totalItems - item.quantity, // Уменьшаем общее количество товаров
          totalPrice: state.totalPrice - item.price, // Уменьшаем общую стоимость
        }));
      },
    }),
    { name: 'cart', skipHydration: true }
  )
);
