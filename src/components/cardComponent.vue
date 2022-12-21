<script setup>
defineProps({
  id: Number,
  name: String,
  image: String,
  price: Number,
});

</script>

<template>
  <div class="card">
    <div class="iamge">
      <img :src="image" />
    </div>
    <div class="lowwer-container">
      <p>{{ name }}</p>
      <p>{{ price }}</p>
    </div>
    <!-- Create a emmmit button that send the product id -->
    <button @click="$emit('add-to-cart', id)">Add to cart</button>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.iamge {
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.iamge img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.lowwer-container {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
