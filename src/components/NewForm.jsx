import React, { useState } from 'react';
import axios from 'axios';

function NewForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !agree) {
      alert('Заполните все поля и согласитесь с условиями');
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
      setName('');
      setPhone('');
      setAgree(false);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Ошибка при отправке данных');
    }
  };

  return (
    <form className="new-form-content" onSubmit={handleSubmit}>
      <div className="new-form-row">
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
        <button type="submit">Получить консультацию</button>
      </div>
      <div className="new-checkbox-container">
        <input
          type="checkbox"
          id="new-consent"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          required
        />
        <label htmlFor="new-consent">Я соглашаюсь на обработку персональных данных</label>
      </div>
    </form>
  );
}

export default NewForm;