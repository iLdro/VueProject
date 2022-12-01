<script setup>

defineProps({
  name: String,
  image: String,
  price: Int,
});
</script>

<template>
  <div class="card">
    <div class="iamge">
        <img :src="image">
    </div>
    <div class="lowwer-container">
        <p>{{name}}</p>
        <p>{{price}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
