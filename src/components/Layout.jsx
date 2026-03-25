import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import './Layout.css'

const nav = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Каталог' },
  { to: '/cart', label: 'Корзина', cart: true },
  { to: '/about', label: 'О нас' },
  { to: '/contact', label: 'Контакты' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
            БКС
          </NavLink>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav ${open ? 'nav--open' : ''}`}>
            {nav.map(({ to, label, cart }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' nav-link--active' : ''}${cart ? ' nav-link--cart' : ''}`
                }
                onClick={() => setOpen(false)}
                end={to === '/'}
              >
                {label}
                {cart && totalItems > 0 && (
                  <span className="cart-badge" aria-label={`Товаров в корзине: ${totalItems}`}>
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>БКС</strong>
            <p className="footer-muted">
              Сумки, кошельки и одежда из натуральной кожи. Доставка по России.
            </p>
          </div>
          <div>
            <strong>Контакты</strong>
            <p className="footer-muted">
              info@bks.example
              <br />
              +7 (495) 000-00-00
            </p>
          </div>
          <div>
            <strong>Адрес</strong>
            <p className="footer-muted">
              г. Москва, ул. Примерная, д. 1
              <br />
              Пн–Сб 10:00–20:00
            </p>
          </div>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} БКС. Все права защищены.</p>
      </footer>
    </div>
  )
}
