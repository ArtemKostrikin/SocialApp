// localStorage.js

// Сохранение данных пользователя в LocalStorage
export function saveUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  
  // Получение данных пользователя из LocalStorage
  export function getUserData() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }
  
  // Удаление данных пользователя из LocalStorage
  export function clearUserData() {
    localStorage.removeItem('userData');
  }
  