<template>
  <div>
    <input type="text" v-model="username">
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <button @click="handleRegistration">Register</button>
  </div>
</template>

<script setup>
import { registerUser } from './authService.js';
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');

const handleRegistration = async () => {
  try {
    const response = await registerUser(username.value, email.value, password.value);
    console.log(response); // Обработка успешной регистрации
  } catch (error) {
    console.error(error);
  }
};
</script>
