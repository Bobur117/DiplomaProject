<template>
    <select 
        name="product_filter" 
        id="product_filter"
        v-model="store.selectedCategory"
        @change="store.filterProducts()"
        class="product__filter-select"
    >
        <option  value="">All goods</option>
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
        key: "smartphones",
        title: "Smartphones",
    },
    {
        key: "laptops",
        title: "Laptops",
    },
    {
        key: "fragrances",
        title: "Fragrances",
    },
    {
        key: "skincare",
        title: "Skincare",
    },
    {
        key: "groceries",
        title: "Groceries",
    },
    {
        key: "home-decoration",
        title: "Home-decoration",
    },
    {
        key: "furniture",
        title: "Furniture",
    },
    {
        key: "tops",
        title: "Tops",
    },
    {
        key: "womens-dresses",
        title: "Womens-dresses",
    },
    {
        key: "womens-shoes",
        title: "Womens-shoes",
    },
    {
        key: "mens-shirts",
        title: "Mens-shirts",
    },
    {
        key: "mens-shoes",
        title: "Mens-shoes",
    },
    {
        key: "mens-watches",
        title: "Mens-watches",
    },
    {
        key: "womens-watches",
        title: "Womens-watches",
    },
    {
        key: "womens-bags",
        title: "womens-bags",
    },
    {
        key: "womens-jewellery",
        title: "Womens-jewellery",
    },
    {
        key: "sunglasses",
        title: "Sunglasses",
    },
    {
        key: "automotive",
        title: "Automotive",
    },
    {
        key: "motorcycle",
        title: "Motorcycle",
    },
    {
        key: "lighting",
        title: "Lighting",
    },
    
];
</script>


<style lang="scss">

.product__filter-select{
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