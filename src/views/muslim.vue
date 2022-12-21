<script setup>
import cardComponent from "../components/cardComponent.vue";
import datas from "../assets/api/muslim.json"; 
const items = datas;
console.log(items);
function add(id) {
  console.log(id);
  $emit("add-to-cart", id);
}

</script>
<template>
<div>
    <div class="card-grid">
        <cardComponent @add-to-cart="add" v-for="item in items" :id="item.id" :name="item.name" :image="item.img" :price="item.price"></cardComponent>
    </div>
</div>
</template>
<style scoped>
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    margin: 1rem;
}

</style>