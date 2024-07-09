// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// const users = {
//   'user1': {
//   name: 'Иван',
//   surname: 'Иванов',
//   role: 'Студент 8 института',
//   dateOfBirth: '2000-01-01',
//   age: 23,
//   gender: 'м',
//   hometown: 'Москва',
//   about: 'Студент, интересующийся программированием',
//   },

// };

// app.get('/server/user', (req, res) => {
//   const userId = 'user1'; 
//   res.json(users[userId]); 
// });

// app.put('/server/update', (req, res) => {
//   const userId = 'user1'; 
//   const updatedData = req.body;
//   users[userId] = updatedData;

//   res.status(200).send('Данные успешно обновлены!');
// });

// app.listen(3001, () => {
//   console.log('Сервер запущен на http://localhost:3001');
// });


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
const port = 3001;

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
