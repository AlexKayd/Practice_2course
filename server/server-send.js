const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

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
};

app.get('/server/user', (req, res) => {
  const userId = 'user1';
  res.json(users[userId]); 
});

app.put('/server/update', (req, res) => {
    const userId = 'user1';
    const updatedData = req.body;
  
    users[userId] = updatedData;
  
    res.status(200).send('Данные успешно обновлены!');
  });

app.listen(3002, () => {
  console.log('Сервер отправки данных запущен на http://localhost:3002');
});