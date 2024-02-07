<template>
    <div class="products__content-item">
        <div class="products__content-item-img">
            <router-link :to="'/product/' + id">
                <img :src="thumbnail" :alt="title"> 
            </router-link>
            </div>
        <h2 class="products__content-title">{{ title }}</h2>
        <p class="products__content-descr">{{ description.substring(0, 50) }} ...</p> 
        <div class="products__content-item-footer">
            <strike class="products__content-item-price">
                ${{price}}
            </strike>
            <button>
                Buy
            </button>
        </div>   
        <div class="products__content-item-footer-discount">
            <p class="products__content-item-price-discount">
                ${{ Math.floor(price - (price * discountPercentage / 100)) }}
            </p>
            <p class="products__content-item-footer-discount-stock">
                Stock: {{ stock }}
            </p>
        </div>
    </div>
  
</template>

<script setup>

const props = defineProps([
    'title',
    'price',
    'thumbnail',
    'description',
    'discountPercentage',
    'stock',
    'id',
    'images',
]);
</script>

<style lang="scss">

.products__content-item{
    width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    padding: 10px 16px;
    text-align: center;
    border-radius: 10px;
    background: white;
}

.products__content-item-footer{
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}



.products__content-item-img{
    width: 230px;
    height: 200px;
}
.products__content-item-img img{
    max-width: 100%;
    max-height: 100%;
    height: auto;
    border-radius: 10px;
}

.products__content-title{
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 20px;
    margin: 10px 0;
}
.products__content-descr {
    font-family: 'Montserrat';
    font-weight: 400;
    text-align: left;
    margin: 10px 0; 
    font-style: italic;   
}
.products__content-item-price{
    font-family: 'Montserrat';
    font-weight: 7000;
    font-size: 20px;
    color: red;
}
.products__content-item-footer button{
    color: white;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    background: rgb(39, 128, 126);
    padding: 6px 20px; 
    cursor: pointer;
}
.products__content-item-footer-discount{
    font-family: 'Montserrat';
    display: flex;
    align-items: center;
    justify-content: space-between; 
    font-weight: bold;
    margin-top: -10px;
}
.products__content-item-price-discount{
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
}
.products__content-item-footer-discount-stock{
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 400;
}
</style>