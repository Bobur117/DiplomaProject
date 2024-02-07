<template>
    <div class="products__content container">
        <ProductCard 
            v-for="product in store.currentPageProducts" 
            :key="product.id" 
            :title="product.title" 
            :description="product.description"
            :price="product.price" 
            :thumbnail="product.thumbnail" 
            :discountPercentage="product.discountPercentage"
            :stock="product.stock"
            :id="product.id"
            :images="product.images"
        />
    </div>
  
</template>

<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { useProductsStore } from "@/store/index.js";

const store = useProductsStore();

store.getProducts();

</script>

<style>
.products__content{
    display: flex;
    justify-content: center;
    gap: 23px;
    flex-wrap: wrap;
    margin-top: 100px;
    row-gap: 25px;
    margin-bottom: 50px;
}


</style>

