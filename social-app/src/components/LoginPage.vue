<template>
  <div>
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script setup>
import { loginUser } from './authService.js';
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    const response = await loginUser(username.value, password.value);
    console.log(response); // Обработка успешного входа
  } catch (error) {
    console.error(error);
  }
};
</script>
