<template>
    <select 
        name="product_filter" 
        id="product_filter"
        v-model="store.selectedSort"
        @change="store.sortProducts()"
        class="product__filter-sort"
    >
        <option value="">Choose sort type</option>
        <option 
            v-for="category in categories" 
            :value="category.key" 
            :key="category.key"
            
        >
            {{ category.title }}
        </option>
    </select>
</template>

<script setup>

import { useProductsStore } from "@/store/index.js";

const store = useProductsStore();

const categories = [

    {
        key: "title",
        title: "Sort by title",
    },
    {   
        key: "price",
        title: "Sort by price",
    },  
    {
        key: "stock",
        title: "Sort by stock",
    },
    
];

</script>

<style lang="scss">

.product__filter-sort{
    padding: 5px 7px;
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
</style>