import { useMemo, useState } from 'react'
import { products, categories } from '../data/products'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../lib/formatPrice'
import './Pages.css'

export default function Catalog() {
  const [filter, setFilter] = useState('Все')
  const { addItem } = useCart()

  const list = useMemo(() => {
    if (filter === 'Все') return products
    return products.filter((p) => p.category === filter)
  }, [filter])

  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Каталог</h1>
        <p className="page-subtitle">
          Сумки, кошельки, одежда и аксессуары из кожи. Добавляйте товары в корзину — она сохраняется
          в браузере.
        </p>
      </header>

      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={`filter-btn${filter === c ? ' filter-btn--active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="product-grid">
        {list.map((p) => (
          <li key={p.id} className="product-card">
            <div className="product-card-image-wrap">
              <img
                src={p.image}
                alt=""
                className="product-card-image"
                loading="lazy"
                width={450}
                height={340}
              />
            </div>
            <div className="product-card-body">
              <span className="product-card-cat">{p.category}</span>
              <h2 className="product-card-name">{p.name}</h2>
              <p className="product-card-desc">{p.description}</p>
              <p className="product-card-price">{formatPrice(p.price)}</p>
              <button
                type="button"
                className="btn btn--primary btn--small"
                onClick={() => addItem(p.id, 1)}
              >
                В корзину
              </button>
            </div>
          </li>
        ))}
      </ul>

      {list.length === 0 && (
        <p className="empty-msg">В этой категории пока нет товаров (демо-фильтр).</p>
      )}
    </div>
  )
}
