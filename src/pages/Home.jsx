import { Link } from 'react-router-dom'
import './Pages.css'

const heroImage =
  'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1600&q=85'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Натуральная кожа · Ручная работа</p>
          <h1 className="hero-title">Сумки и аксессуары, которые служат годами</h1>
          <p className="hero-lead">
            Мы создаём изделия из отборной кожи: от лаконичных кошельков до объёмных сумок и курток.
            Каждая модель — это внимание к деталям и честные материалы.
          </p>
          <div className="hero-actions">
            <Link to="/catalog" className="btn btn--primary">
              Смотреть каталог
            </Link>
            <Link to="/about" className="btn btn--ghost">
              О мастерской
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <h2 className="section-title">Почему выбирают нас</h2>
          <div className="features">
            <article className="feature">
              <h3>Качество кожи</h3>
              <p>
                Работаем только с проверенными поставщиками. Кожа проходит контроль на толщину,
                однородность и устойчивость к износу.
              </p>
            </article>
            <article className="feature">
              <h3>Срок службы</h3>
              <p>
                Правильный уход продлевает жизнь изделия. Мы даём рекомендации по хранению и
                обработке кожаных вещей.
              </p>
            </article>
            <article className="feature">
              <h3>Доставка</h3>
              <p>
                Отправляем заказы по всей России. Упаковка защищает изделие при транспортировке.
                Сроки уточняйте при оформлении.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-inner cta-block">
          <div>
            <h2 className="section-title section-title--left">Готовы подобрать модель?</h2>
            <p className="cta-text">
              В каталоге представлены сумки, кошельки, кожаная одежда и аксессуары. Цены и описания
              носят демонстрационный характер — замените их на актуальные для вашего магазина.
            </p>
          </div>
          <Link to="/catalog" className="btn btn--primary btn--large">
            Перейти в каталог
          </Link>
        </div>
      </section>
    </>
  )
}
