<template>
    <div class="product__pagination-content container">
        <button @click="store.previousPage()">Previous</button>
        <p>Current page: {{ store.currentPage }}</p>
        <button @click="store.nextPage()">Next</button>
    </div>
  
</template>

<script setup>
import { useProductsStore } from "@/store/index.js";

const store = useProductsStore();

</script>

<style lang="scss">

.product__pagination-content{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 50px;
    padding-bottom: 40px;
}

.product__pagination-content button {
    padding: 5px 10px;
    border-radius: 5px;
    background: white;
    font-family: 'Montserrat';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: .3s;
    border: none;
    &:hover{
        background: rgb(3, 57, 75);
        color:rgb(255, 203, 46);
    }
}

.product__pagination-content p {
    font-family: 'Montserrat';
    font-size: 16px;
    color: white;
    font-weight: 700;
}

</style>