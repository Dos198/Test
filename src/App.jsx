import React from 'react';
import Form from './components/Form';
import NewForm from './components/NewForm';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Подключение Font Awesome

function App() {
  return (
    <div className="app">
      <div className="header-section">
        <div className="left-info">
          <h2 className="main-title">ТЕСТОВОЕ ЗАДАНИЕ</h2>
          <h2 className="sub-title">ВЫПОЛНЕН ВЕРСТКИ КОМПОНЕНТА</h2>
          <div className="text-with-icons">
            <p><i className="fas fa-book"></i> Используйте чистый BEM, React контекст проработки, MVVM и CleanArchitecture</p>
            <p><i className="fas fa-th"></i> Flex и Grid системы верстки.</p>
          </div>
          <div className="note-and-button">
            <p className="note">Будем рады видеть вас в нашей команде :)</p>
            <button className="done-button">Я все выполнил!</button>
          </div>
        </div>
        <div className="form-wrapper">
          <Form buttonText="Записаться" showTitle={true} />
        </div>
      </div>

      <div className="about-section">
        <h2>О НАС</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>Какая-то компания</strong> — стартап IT компания, занимающаяся <span className="right-aligned">разработкой сторонних решений</span>.
            </p>
            <p>
              Мы придерживаемся подходов TDD, DDD, Clean Code. Качество всегда в приоритете.
            </p>
          </div>
          <img src="/image.png" alt="About Us" className="about-image" />
        </div>
      </div>

      <h2>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h2>
      <div className="cards">
        <div className="card">
          <div className="card-header">
            <span>2 месяца</span>
            <span>Стартовая</span>
          </div>
          <button className="details-button">Дополнительно</button>
          <h3>Frontend: ReactJS</h3>
          <p>Вы и путь в IT начинается с нами, после выполнения тестового задания</p>
          <div className="price-row">
            <div className="price-container">
              <span className="price-label">Стоимость какого-то продукта</span>
              <div className="price">
                <span>₸</span> 11 111 т.р.
              </div>
            </div>
            <button className="clear-button">Записаться</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <span>2 месяца</span>
            <span>Стартовая</span>
          </div>
          <button className="details-button">Дополнительно</button>
          <h3>Backend: PHP (Symfony/Laravel)</h3>
          <p>У нас всегда есть много задач по PHP, которые ждут FullStack-ов на уровне и выше</p>
          <div className="price-row">
            <div className="price-container">
              <span className="price-label">Стоимость какого-то продукта</span>
              <div className="price">
                <span>₸</span> 11 222 т.р.
              </div>
            </div>
            <button className="clear-button">Записаться</button>
          </div>
        </div>
      </div>

      <div className="final-section">
        <div className="final-section-header">
          <h2 className="main-header">ДО КОНЦА АКЦИИ МЕНЬШЕ НЕДЕЛИ!</h2>
          <h2 className="sub-header">Оформите заявку до Х мая и сэкономьте ХХХХХ тг./мес.</h2>
        </div>
        <NewForm />
      </div>
    </div>
  );
}

export default App;