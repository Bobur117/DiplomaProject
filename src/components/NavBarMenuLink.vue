<template>
    <li>
        <a href="" class="nav__list-link">
            {{ title }}
        </a>
    </li>
</template>

<script setup>
const props = defineProps(['title']);
</script>

<style lang="scss">
.nav__list-link{
    color: white;
    font-family: 'Montserrat';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: .5s;
    &:hover{
        color:rgb(255, 203, 46);
    }
}

</style>
