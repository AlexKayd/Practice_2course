// server-send.js (сервер для отправки данных)
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Замените этот объект на данные из вашей базы данных или других источников
const users = {
  'user1': {
    name: 'Иван',
    surname: 'Петров',
    role: 'Студент 8 института',
    dateOfBirth: '2000-01-01',
    age: 23,
    gender: 'м',
    hometown: 'Москва',
    about: 'Люблю программировать!'
  }
  // ... other users
};

app.get('/server/user', (req, res) => {
  // Добавьте логику для проверки аутентификации
  const userId = 'user1'; // Замените на фактический ID пользователя
  res.json(users[userId]); 
});

app.put('/server/update', (req, res) => {
    // Добавьте логику для проверки аутентификации
    const userId = 'user1'; // Замените на фактический ID пользователя
    const updatedData = req.body;
  
    users[userId] = updatedData; // Обновление данных пользователя
  
    res.status(200).send('Данные успешно обновлены!');
  });

app.listen(3002, () => {
  console.log('Сервер отправки данных запущен на http://localhost:3002');
});