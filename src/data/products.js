/** Изображения с Unsplash (внешние URL). */
export const products = [
  {
    id: '1',
    name: 'Сумка «Классика»',
    category: 'Сумки',
    price: 12900,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    description:
      'Классическая сумка из натуральной кожи. Подходит для повседневного использования и деловых встреч.',
  },
  {
    id: '2',
    name: 'Кросс-боди «Город»',
    category: 'Сумки',
    price: 9800,
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    description:
      'Компактная сумка через плечо. Регулируемый ремень и удобные отделения.',
  },
  {
    id: '3',
    name: 'Кошелёк «Минимал»',
    category: 'Кошельки',
    price: 4200,
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80',
    description:
      'Тонкий кошелёк на магнитной застёжке. Отделения для карт и банкнот.',
  },
  {
    id: '4',
    name: 'Портмоне «Винтаж»',
    category: 'Кошельки',
    price: 5600,
    image:
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80',
    description:
      'Вместительное портмоне с патинированной кожей. Ручная работа, уникальная фактура.',
  },
  {
    id: '5',
    name: 'Куртка кожаная',
    category: 'Одежда',
    price: 28900,
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80',
    description:
      'Классическая кожаная куртка. Подкладка из хлопка, качественная фурнитура.',
  },
  {
    id: '6',
    name: 'Ремень «Строгий»',
    category: 'Аксессуары',
    price: 3900,
    image:
      'https://images.unsplash.com/photo-1586075010923-2fcb457be3b8?auto=format&fit=crop&w=900&q=80',
    description:
      'Ремень из цельной кожи с металлической пряжкой. Ширина 3,5 см.',
  },
  {
    id: '7',
    name: 'Рюкзак «Урбан»',
    category: 'Сумки',
    price: 15400,
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
    description:
      'Городской рюкзак из плотной кожи. Отделение для ноутбука до 15".',
  },
  {
    id: '8',
    name: 'Сумка-тоут',
    category: 'Сумки',
    price: 11200,
    image:
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
    description:
      'Просторная сумка-тоут. Мягкая кожа, внутренний карман на молнии.',
  },
]

export const categories = ['Все', 'Сумки', 'Кошельки', 'Одежда', 'Аксессуары']

export function getProductById(id) {
  return products.find((p) => p.id === id)
}
