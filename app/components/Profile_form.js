'use client'

import React, { useState, useEffect } from 'react';
import styles from './ProfileForm.module.css';

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [role, setRole] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [hometown, setHometown] = useState('');
  const [about, setAbout] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    if (!name || !surname || !role) {
      return; // Выход, если поля не заполнены
    }

    try {
      const response = await fetch('http://localhost:3002/server/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          surname,
          role,
          dateOfBirth,
          age,
          gender,
          hometown,
          about,
        }),
      });

      if (response.ok) {
        console.log('Данные успешно сохранены!');
        setIsEditing(false);
      } else {
        console.error('Ошибка при сохранении данных');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  useEffect(() => {
    // Запрос на сервер для получения данных пользователя при монтировании компонента
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3002/server/user'); 
        const data = await response.json();

        setName(data.name);
        setSurname(data.surname);
        setRole(data.role);
        setDateOfBirth(data.dateOfBirth);
        setAge(data.age);
        setGender(data.gender);
        setHometown(data.hometown);
        setAbout(data.about);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.profileForm}>
      <div className={styles.fields}>
        <div>
          <label htmlFor="name">Имя<span className={styles.red}>*</span>:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={!isEditing}
            style={{ borderColor: !name ? 'rgb(154, 27, 27)' : 'lightgray' }}
            onFocus={(e) => e.target.style.outline = 'none'}
          />
        </div>
        <div>
          <label htmlFor="surname">Фамилия<span className={styles.red}>*</span>:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            readOnly={!isEditing}
            style={{ borderColor: !surname ? 'rgb(154, 27, 27)' : 'lightgray' }}
            onFocus={(e) => e.target.style.outline = 'none'}
          />
        </div>
        <div>
          <label htmlFor="role">Роль<span className={styles.red}>*</span>:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={!isEditing}
            style={{ borderColor: !role ? 'rgb(154, 27, 27)' : 'lightgray' }}
            onFocus={(e) => e.target.style.outline = 'none'}
          >
            <option value="">Выберите роль</option>
            <option value="Студент 8 института">Студент 8 института</option>
            <option value="Работодатель">Работодатель</option>
            <option value="Пользователь платформы">Пользователь платформы</option>
            <option value="Организатор мероприятий">Организатор мероприятий</option>
          </select>
        </div>
        <div>
          <label htmlFor="dateOfBirth">Дата рождения:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            readOnly={!isEditing}
            onFocus={(e) => e.target.style.outline = 'none'}
          />
        </div>
        <div>
          <label htmlFor="age">Возраст:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            readOnly={!isEditing}
            onFocus={(e) => e.target.style.outline = 'none'}
          />
        </div>
        <div>
          <label htmlFor="gender">Пол:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            disabled={!isEditing}
            onFocus={(e) => e.target.style.outline = 'none'}
          >
            <option value="">Выберите пол</option>
            <option value="м">М</option>
            <option value="ж">Ж</option>
          </select>
        </div>
        <div>
          <label htmlFor="hometown">Родной город:</label>
          <input
            type="text"
            id="hometown"
            value={hometown}
            onChange={(e) => setHometown(e.target.value)}
            readOnly={!isEditing}
            onFocus={(e) => e.target.style.outline = 'none'}
          />
        </div>
        <div>
          <label htmlFor="about">О себе:</label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            readOnly={!isEditing}
            onFocus={(e) => e.target.style.outline = 'none'}
          />
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttons}>
          {!isEditing && <button className={styles.editButton} onClick={handleEditClick}>Редактировать</button>}
          {isEditing && <button className={styles.saveButton} onClick={handleSaveClick}>Сохранить</button>}
        </div>
      </div>
      <p className={styles.text}>*Обязательное для заполнения поле</p>
    </div>
  );
};

export default ProfileForm;



// 'use client'
// import React, { useState } from 'react';
// import styles from './ProfileForm.module.css';

// const ProfileForm = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState('');
//   const [surname, setSurname] = useState('');
//   const [role, setRole] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [hometown, setHometown] = useState('');
//   const [about, setAbout] = useState('');


//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/server/profile'); // Замените на ваш API-адрес
//       if (response.ok) {
//         const data = await response.json();
//         setName(data.name);
//         setSurname(data.surname);
//         setRole(data.role);
//         setDateOfBirth(data.dateOfBirth);
//         setAge(data.age);
//         setGender(data.gender);
//         setHometown(data.hometown);
//         setAbout(data.about);
//       } else {
//         console.error('Ошибка при получении данных');
//       }
//     } catch (error) {
//       console.error('Ошибка при отправке данных:', error);
//     }
//   };


//   const handleEditClick = () => {
//     setIsEditing(true);
//   }; 

//   const handleSaveClick = async () => {

//     if (!name || !surname || !role) {
//       return; 
//     }

//     try {
//       const response = await fetch('http://localhost:3001/server/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           surname,
//           role,
//           dateOfBirth,
//           age,
//           gender,
//           hometown,
//           about,
//         }),
//       });
//       if (response.ok) {
//         console.log('Данные успешно сохранены!');
//         setIsEditing(false);
//       } else {
//         console.error('Ошибка при сохранении данных');
//       }
//     } catch (error) {
//       console.error('Ошибка при отправке данных:', error);
//     }
//   };

//   return (
//     <div className={styles.profileForm}>
//       <div className={styles.fields}>
//         <div>
//           <label htmlFor="name">Имя:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             readOnly={!isEditing}
//             style={{ borderColor: !name ? 'red' : 'lightgray' }} 
//             onFocus={(e) => e.target.style.outline = 'none'}
//           />
//         </div>
//         <div>
//           <label htmlFor="surname">Фамилия:</label>
//           <input
//             type="text"
//             id="surname"
//             value={surname}
//             onChange={(e) => setSurname(e.target.value)}
//             readOnly={!isEditing}
//             style={{ borderColor: !surname ? 'red' : 'lightgray' }} 
//             onFocus={(e) => e.target.style.outline = 'none'}
//           />
//         </div>
//         <div>
//           <label htmlFor="role">Роль:</label>
//           <select             id="role"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             disabled={!isEditing}
//             style={{ borderColor: !role ? 'red' : 'lightgray' }}
//             onFocus={(e) => e.target.style.outline = 'none'}
//           >
//             <option value="">Выберите роль</option>
//             <option value="Студент 8 института">Студент 8 института</option>
//             <option value="Работодатель">Работодатель</option>
//             <option value="Пользователь платформы">Пользователь платформы</option>
//             <option value="Организатор мероприятий">Организатор мероприятий</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="dateOfBirth">Дата рождения:</label>
//           <input
//             type="date"
//             id="dateOfBirth"
//             value={dateOfBirth}
//             onChange={(e) => setDateOfBirth(e.target.value)}
//             readOnly={!isEditing}
//             onFocus={(e) => e.target.style.outline = 'none'}
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Возраст:</label>
//           <input
//             type="number"
//             id="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             readOnly={!isEditing}
//             onFocus={(e) => e.target.style.outline = 'none'}
//           />
//         </div>
//         <div>
//           <label htmlFor="gender">Пол:</label>
//           <select
//             id="gender"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             disabled={!isEditing}
//             onFocus={(e) => e.target.style.outline = 'none'}
//           >
//             <option value="">Выберите пол</option>
//             <option value="м">М</option>
//             <option value="ж">Ж</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="hometown">Родной город:</label>
//           <input
//             type="text"
//             id="hometown"
//             value={hometown}
//             onChange={(e) => setHometown(e.target.value)}
//             readOnly={!isEditing}
//             onFocus={(e) => e.target.style.outline = 'none'}
//           />
//         </div>
//         <div>
//           <label htmlFor="about">О себе:</label>
//           <textarea
//             id="about"
//             value={about}
//             onChange={(e) => setAbout(e.target.value)}
//             readOnly={!isEditing}
//             onFocus={(e) => e.target.style.outline = 'none'}
//           />
//         </div>
//       </div>
//       <div className={styles.buttonsContainer}> 
//       <div className={styles.buttons}>
//         {!isEditing && <button className={styles.editButton} onClick={handleEditClick}>Редактировать</button>}
//         {isEditing && <button className={styles.saveButton} onClick={handleSaveClick}>Сохранить</button>}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileForm;
