<template>
    <div class="product__filter-right">
        Total number of items: {{ store.filteredProductsAmount }}
    </div>  
</template>

<script setup>
import { useProductsStore } from "@/store/index.js";

const store = useProductsStore();
</script>

<style lang="scss">

.product__filter-right{
    padding: 5px 7px;
    border-radius: 5px;
    background: white;
    font-family: 'Montserrat';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: .3s;
    &:hover{
        background: rgb(3, 57, 75);
        color:rgb(255, 203, 46);
    }
}


</style>

