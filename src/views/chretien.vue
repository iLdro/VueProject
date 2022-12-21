<script setup>
import cardComponent from "../components/cardComponent.vue";
import datas from "../assets/api/christian.json";
const items = datas;
const emitter = defineEmits(["add-to-cart"])
function add(id){
  id = id;
  emitter("add-to-cart",id)
}
</script>
<template>  
  <div>
    <div class="card-grid">      
      <cardComponent @add-to-cart="add" v-for="item in items" :id="item.id" :name="item.name" :image="item.img" :price="item.price"></cardComponent>  
    </div>
    <h2>HI</h2>
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
