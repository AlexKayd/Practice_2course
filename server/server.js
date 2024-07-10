// name: 'Иван',
// surname: 'Иванов',
// role: 'Студент 8 института',
// dateOfBirth: '2000-01-01',
// age: 23,
// gender: 'м',
// hometown: 'Москва',
// about: 'Студент, интересующийся программированием',

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3003;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.post('/server/register', (req, res) => {
  const { login, password } = req.body;
  console.log('Запрос на регистрацию:', login, password); 

  res.status(200).json({ message: 'Пользователь зарегистрирован!' });
});


app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});