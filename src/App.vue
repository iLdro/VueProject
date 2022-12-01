<script setup>
import navbar from "./components/navbar.vue";
</script>
<template>
  <div class="navbar">
    <navbar />
  </div>
  <!-- <div class="background">
    <a href="something" class="button2">Button</a>
  </div> -->
 <router-link to="/chretien" >Go</router-link>
</template>

<style scoped>
.container {
  background-color: black;
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100%;
  width: 100%;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: beige;
  z-index: -1;
  display: flex;

}
  
</style>
