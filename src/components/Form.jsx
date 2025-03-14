import React, { useState } from 'react';
import axios from 'axios';

function Form({ showCheckbox = false, buttonText = 'Записаться', showTitle = false }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);

  const handleClear = () => {
    setName('');
    setPhone('');
    setAgree(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || (showCheckbox && !agree)) {
      alert('Заполните все поля и согласитесь с условиями, если требуется');
      return;
    }
    if (!/^\d+$/.test(phone)) {
      alert('Телефон должен содержать только цифры');
      return;
    }

    try {
      const response = await axios.post('http://128.199.13.67:5000/api/submit', {
        name,
        phone,
        agree,
      });
      console.log('Данные успешно отправлены:', response.data);
      handleClear();
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Ошибка при отправке данных');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {showTitle && (
        <h3 className="form-title">ТЕСТОВАЯ ФОРМА ДЛЯ ПОДАЧИ ЗАЯВКИ</h3>
      )}
      <div className="form-row">
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ backgroundColor: '#f0f0f0' }}
        />
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ backgroundColor: '#f0f0f0' }}
        />
        <button type="submit">{buttonText}</button>
      </div>
      {showCheckbox && (
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="consent"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="consent">Я соглашаюсь на обработку персональных данных</label>
        </div>
      )}
    </form>
  );
}

export default Form;