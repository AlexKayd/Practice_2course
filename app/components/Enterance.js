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
  const [errorMessage, setErrorMessage] = useState(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (login.trim() === '' || password.trim() === '') {
        setLoginError(login.trim() === '');
        setPasswordError(password.trim() === '');
        setRegistrationSuccess(false);
        return;
      }
      else{
        setRegistrationSuccess(true);
      }
  
      try {
          const response = await fetch('http://localhost:3001/server/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ login, password })
        });
  
        if (response.ok) {
          setErrorMessage(true);
        } else {
          setErrorMessage(false);
        }
      } catch (error) {
  
      }
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

      {registrationSuccess && errorMessage && router.push('/lk')}
      {registrationSuccess && !errorMessage && <p className="bad-message">!! Ошибка авторизации !! Попробуйте изменить логин или пароль.</p>}
    </form>
  );
};

export default Enterance;