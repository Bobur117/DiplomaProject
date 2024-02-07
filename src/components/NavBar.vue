<template>
  <nav class="nav">
    <div class="nav__content container">
        <NavBarLogo />
        <NavBarMenu />
        <NavBarCart />
    </div>
  </nav>
</template>

<script setup>
import NavBarLogo from "@/components/NavBarLogo.vue";
import NavBarMenu from "@/components/NavBarMenu.vue";
import NavBarCart from "@/components/NavBarCart.vue";
</script>

<style>

.nav{
  display: flex;
  background: #0F1111;
}

.nav__content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}




</style>