import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../lib/formatPrice'
import './Pages.css'

export default function Cart() {
  const {
    items,
    totalPrice,
    increment,
    decrement,
    removeItem,
    clearCart,
  } = useCart()

  if (items.length === 0) {
    return (
      <div className="page page--narrow">
        <header className="page-header">
          <h1 className="page-title">Корзина</h1>
          <p className="page-subtitle">Пока пусто — добавьте товары из каталога.</p>
        </header>
        <Link to="/catalog" className="btn btn--primary">
          Перейти в каталог
        </Link>
      </div>
    )
  }

  return (
    <div className="page cart-page">
      <header className="page-header cart-header">
        <div>
          <h1 className="page-title">Корзина</h1>
          <p className="page-subtitle">
            {items.length}{' '}
            {items.length === 1
              ? 'позиция'
              : items.length < 5
                ? 'позиции'
                : 'позиций'}
          </p>
        </div>
        <button type="button" className="btn btn--ghost btn--small" onClick={clearCart}>
          Очистить корзину
        </button>
      </header>

      <ul className="cart-lines">
        {items.map(({ product, quantity, lineTotal, productId }) => (
          <li key={productId} className="cart-line">
            <div className="cart-line-image-wrap">
              <img src={product.image} alt="" width={120} height={90} loading="lazy" />
            </div>
            <div className="cart-line-info">
              <h2 className="cart-line-name">{product.name}</h2>
              <p className="cart-line-meta">
                {product.category} · {formatPrice(product.price)} за шт.
              </p>
              <div className="cart-line-actions">
                <div className="qty" role="group" aria-label="Количество">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => decrement(productId)}
                    aria-label="Уменьшить"
                  >
                    −
                  </button>
                  <span className="qty-value">{quantity}</span>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => increment(productId)}
                    aria-label="Увеличить"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="cart-remove"
                  onClick={() => removeItem(productId)}
                >
                  Удалить
                </button>
              </div>
            </div>
            <div className="cart-line-total">{formatPrice(lineTotal)}</div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p className="cart-total-label">Итого</p>
        <p className="cart-total-value">{formatPrice(totalPrice)}</p>
      </div>

      <p className="cart-note">
        Оплата и доставка настраиваются отдельно — это демо-корзина, данные хранятся в браузере
        (localStorage).
      </p>

      <div className="cart-footer-actions">
        <Link to="/catalog" className="btn btn--ghost">
          ← К каталогу
        </Link>
        <button type="button" className="btn btn--primary" disabled>
          Оформить заказ (демо)
        </button>
      </div>
    </div>
  )
}
