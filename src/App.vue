<template>
  <div class="wrapper">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss">

</style>