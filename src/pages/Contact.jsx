import { useState } from 'react'
import './Pages.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page page--narrow">
      <header className="page-header">
        <h1 className="page-title">Контакты</h1>
        <p className="page-subtitle">
          Форма ниже не отправляет данные на сервер — это демонстрация интерфейса.
        </p>
      </header>

      <div className="contact-grid">
        <div className="contact-card">
          <h2 className="contact-card-title">Связь</h2>
          <p>
            Email:{' '}
            <a href="mailto:info@bks.example" className="inline-link">
              info@bks.example
            </a>
          </p>
          <p>Телефон: +7 (495) 000-00-00</p>
          <p className="contact-muted">
            Время работы колл-центра: пн–пт 9:00–18:00 (MSK). В выходные — только email.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="field">
            <span className="field-label">Имя</span>
            <input type="text" name="name" placeholder="Как к вам обращаться" required />
          </label>
          <label className="field">
            <span className="field-label">Email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label className="field">
            <span className="field-label">Сообщение</span>
            <textarea name="message" rows={5} placeholder="Вопрос по заказу или доставке" required />
          </label>
          <button type="submit" className="btn btn--primary">
            Отправить
          </button>
          {sent && (
            <p className="form-note" role="status">
              Сообщение «отправлено» (демо). Подключите backend или сервис форм для реальной отправки.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
