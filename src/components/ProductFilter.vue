<template>
    <div class="product__filter container">
        <div class="product__filter-left">
            <ProductFilterSelect />
            <ProductFilterSort />
        </div>
        <ProductFilterResult />
    </div>
</template>

<script setup>
import ProductFilterSelect from "@/components/ProductFilterSelect.vue";
import ProductFilterResult from "@/components/ProductFilterResult.vue";
import ProductFilterSort from "@/components/ProductFilterSort.vue";

</script>

<style>
.product__filter{
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    z-index: 1;
}
#product_filter{
    margin-right: 50px;
    padding: 5px;
    border-radius: 5px;
}
.product_filter-apply{
    padding: 5px;
    border-radius: 5px;
}





</style>

