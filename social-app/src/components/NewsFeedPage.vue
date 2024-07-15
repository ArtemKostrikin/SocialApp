<template>
  <div>
    <h1>News Feed Page</h1>
    <div v-for="(post, index) in posts" :key="index">
      <PostComp :post="post" />
    </div>
    <textarea v-model="newPost"></textarea>
    <button @click="addPost">Add Post</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PostComp from './PostComp.vue';

const posts = ref([
  { title: 'Post 1', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Post 2', content: 'Consectetur adipiscing elit' }
]);

const newPost = ref('');

const addPost = () => {
  if (newPost.value.trim() !== '') {
    posts.value.push({ title: 'New Post', content: newPost.value });
    newPost.value = '';
  }
};
</script>
