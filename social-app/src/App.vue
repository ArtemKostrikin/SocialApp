<template>
  <div id="app">
    <NavbarMenu />
    <router-view />
    <SideBar />
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue';
import SideBar from './components/SideBar.vue';

export default {
  components: {
    NavbarMenu,
    SideBar
  }
};
</script>

<style>
/* добавьте стили, если необходимо */
</style>
