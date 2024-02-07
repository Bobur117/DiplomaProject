<template>
    <footer class="footer">
        <div class="footer__content container">
            <h2 class="footer__content-title">
                Customer Service 24/7
            </h2>
            <div class="footer__content-descr">
                <p class="footer__content-info">
                    b.ibrokhimov@wiut.uz
                </p>
                <p class="footer__content-info">
                    +998 90 998 29 19
                </p>
            </div>
        </div>
    </footer>
  
</template>

<script setup>

</script>

<style>

.footer{
    background: #0F1111;
}
.footer__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
}
.footer__content-title{
    font-family: 'Montserrat';
    color: white;
    font-size: 18px;
    font-weight: 700;
}
.footer__content-descr{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.footer__content-info{
    font-family: 'Montserrat';
    color: white;
    font-size: 18px;
    font-weight: 400;
}

</style>