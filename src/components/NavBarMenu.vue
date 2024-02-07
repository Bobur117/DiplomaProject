<template>
    <ul class="nav__list">
        <NavBarMenuLink v-for="link in links" :key="link.title" :title="link.title" />
    </ul> 
</template>

<script setup>
import NavBarMenuLink from "@/components/NavBarMenuLink.vue";

// const links = [
//     {
//         title: 'Home Page'
//     },
//     {
//         title: 'Categories'
//     },
//     {
//         title: 'Contact us'
//     },
    
// ]
</script>

<style lang="scss">

.nav__list{
    display: flex;
    gap: 71px;
}

</style>

