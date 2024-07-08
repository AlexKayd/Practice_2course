const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.post('/server/register', (req, res) => {
  const { login, password } = req.body;
  console.log('Запрос на регистрацию:', login, password); 
  // Вставьте сюда логику регистрации пользователя 
  res.status(200).json({ message: 'Пользователь зарегистрирован!' });
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
