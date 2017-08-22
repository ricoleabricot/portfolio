<template>
    <div class="box-container">
        <div class="box">
            <div class="cat">
                <div class="cat__body"></div>
                <div class="cat__body"></div>
                <div class="cat__tail"></div>
                <div class="cat__head"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'cat-loader'
    }
</script>

<style scoped>
    .cat {
        position: relative;
        width: 100%;
        max-width: 20em;
        overflow: hidden;
    }
    .cat::before {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
    .cat:hover > * {
        animation-play-state: paused;
    }
    .cat:active > * {
        animation-play-state: running;
    }

    .cat__head, .cat__tail, .cat__body {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
    }
    .cat__head::before, .cat__tail::before, .cat__body::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 50%;
        background-size: 200%;
        background-repeat: no-repeat;
        background-image: url('../assets/cat.png');
    }

    .cat__head::before {
        top: 0;
        right: 0;
        background-position: 100% 0;
        transform-origin: 0 100%;
        transform: rotate(90deg);
    }

    .cat__tail {
        animation-delay: .2s;
    }
    .cat__tail::before {
        left: 0;
        bottom: 0;
        background-position: 0 100%;
        transform-origin: 100% 0;
        transform: rotate(-30deg);
    }

    .cat__body {
        animation-delay: .1s;
    }
    .cat__body:nth-of-type(2) {
        animation-delay: .2s;
    }
    .cat__body::before {
        right: 0;
        bottom: 0;
        background-position: 100% 100%;
        transform-origin: 0 0;
    }

    @keyframes rotating {
        from {
            transform: rotate(720deg);
        }
        to {
            transform: none;
        }
    }

    .box {
        position: relative;
        top: 45%;
        zoom: 0.2;

        display: -ms-flexbox;
        display: flex;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-align: center;
        align-items: center;
        background-color: #fff;
    }

    .box-container {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        bottom: 0;
        background-color: white;
        z-index: 0;
    }
</style>
