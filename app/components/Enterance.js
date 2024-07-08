'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Enterance = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const router = useRouter(); 
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Проверка заполненности полей
    if (login.trim() === '' || password.trim() === '') {
      setLoginError(login.trim() === '');
      setPasswordError(password.trim() === '');
      setRegistrationSuccess(false);
      return;
    }

    // Сохранение данных в переменные
    // (Можно использовать localStorage, sessionStorage или другую логику)
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);

    setRegistrationSuccess(true);
    setLoginError(false);
    setPasswordError(false);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h3>Вход</h3>

      <div className="input-container">
        <label htmlFor="login">Login:</label>
        <input
          type="text"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className={loginError ? 'error' : ''}
        />
      </div>

      <div className="password-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={passwordError ? 'error' : ''}
        />
        <button type="submit" className="enter-button">Enter</button>
      </div>

      {registrationSuccess && router.push('/lk')}
    </form>
  );
};

export default Enterance;