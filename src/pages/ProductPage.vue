<template>
  <div class="product__page container">
    <div class="product__page-content">
      <div class="product__page-content-left">
        <swiper
          v-if="product"
          :slides-per-view="1"
          @slideChange="onSlideChange"
          
          class="mySwiper"
        >
          <swiper-slide 
            v-for="(image, index) in product.images"
            :key="index"
          >
            <img :src="image" :alt="title"> 
          </swiper-slide>
        </swiper>
      </div>
    
    
    
      <div class="product__page-content-right">
        <div class="product__page-top">
            <h1 class="product__page-title">
              {{ product?.title }}
            </h1>
            
        </div>
        <p class="product__page-descr">
          {{ product?.description }}
        </p>
        
        <div class="product__page-bottom">
          <p class="product__page-newprice">
            ${{ Math.floor(product?.price - (product?.price * product?.discountPercentage / 100)) }}
          </p>
          <strike class="product__page-oldprice">
          ${{ product?.price }}
          </strike>
        </div>
          <p class="product__page-stock">
            items left in stock: {{ product?.stock }}
          </p>
          <button>
            Buy
          </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/index.js";
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const route = useRoute();
const store = useProductsStore();
const product = ref(store.products.filter((p) => p.id == route.params.id)[0]);

onMounted(async () => {
  if (store.products.length == 0) {
    await store.getProducts();
    
    product.value = store.products.filter((p) => p.id == route.params.id)[0];
  }
})

</script>

<style lang="scss">

.product__page{
margin-top: 100px;
margin-bottom: 100px;
z-index: 1000;
}

.product__page-content{
  display: flex;
  gap: 50px;
}
.product__page-content-left{
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product__page-content-right{
  display: flex;
  flex-direction: column;
}
.product__page-content-left img{
  width: auto;
  max-height: 400px;
  border-radius: 5px;
}
.product__page-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.product__page-bottom{
  display: flex;
  gap: 10px;
  margin-top: 50px;
}

.product__page-title{
  font-family: 'Montserrat';
  font-size: 40px;
  color: white;
  font-weight: 700;
}
.product__page-descr{
  font-family: 'Montserrat';
  color: white;
  font-size: 28px;
}
.product__page-newprice, .product__page-oldprice{
  font-family: 'Montserrat';
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
}
.product__page-stock{
  font-family: 'Montserrat';
  color: white;
  font-size: 18px;
  font-weight: bold;
}
.product__page-oldprice{
  color: red;
}

.product__page-content-right button{
  color: white;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background: rgb(1, 41, 40);
  padding: 5px;
  cursor: pointer;
  margin-top: 15px;
  width: 100px;
}
</style>