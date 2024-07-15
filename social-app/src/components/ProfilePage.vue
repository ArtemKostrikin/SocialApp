<template>
  <div>
    <h1>Profile Page</h1>
    <p>{{ userProfile.username }}</p>
    <p>{{ userProfile.email }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userProfile = ref({
  username: 'exampleUser',
  email: 'user@example.com'
});
</script>
