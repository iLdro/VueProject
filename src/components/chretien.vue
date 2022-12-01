<script setup>
import cardComponent from './cardComponent.vue';
const data=[
    {
        name:"cross",
        img:"",
        price:20
    },
    {
        name:"chapelet",
        img:"",
        price:"15"
    }
]
</script>
<template>
    <cardComponent v-for="data in datas"
    :name="data.name"
    :image="data.img"
    :price="data.price"
    />

</template>
<style scoped>

</style>