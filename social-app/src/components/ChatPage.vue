<template>
  <div>
    <h1>Chat Page</h1>
    <div v-for="(message, index) in messages" :key="index">
      <MessageComp :message="message" />
    </div>
    <textarea v-model="newMessage"></textarea>
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MessageComp from './MessageComp.vue';

const messages = ref([
  { user: 'User1', text: 'Hello!' },
  { user: 'User2', text: 'Hi there!' }
]);

const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    messages.value.push({ user: 'User1', text: newMessage.value });
    newMessage.value = '';
  }
};
</script>
