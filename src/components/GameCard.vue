<template>
    <div class="content__card">
        <img :src="product.image" alt="" class="content__card-image">
        <div class="content__card-action">
            <h3>{{ product.title }}</h3>
            <div class="content__card-action-icons">
                <iconStar class="content__card-star" :class="{'content__card-star_active' : product.checked }"  />
                <iconArrowRight class="content__card-arrow" />
            </div>
        </div>
    </div>
</template>

<script>
import iconArrowRight from '@/components/icons/IconArrowRight.vue'
import iconStar from '@/components/icons/IconStar.vue'

export default {
    components: {
        iconArrowRight,
        iconStar
    },

    props: {
        product: Object
    }

}
</script>

<style lang="scss">
.content__card {
    background: gray;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
    h3 {
        color: white;   
        font-size: 1rem;
        text-align: left;
        padding: 0.5rem 1rem;
    }
    &:hover {
        .content__card-action {
            opacity: 1;
            background: rgba(0, 0, 0, 0.8);
            height: 70%;
        }
    }
    .content__card-action {
        opacity: 0;
        transition: 0.35s;
        height: 20%;
        cursor: auto;
        z-index: 200;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .content__card-action-icons {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0.375rem;
    }
    .content__card-image {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        z-index: 100;
        object-fit: cover;
    }
    .content__card-title {

    }
    .content__card-star {
        width: 2rem;
        height: 1rem;
        fill: white;
        cursor: pointer;
    }
    .content__card-arrow {
        width: 2rem;
        height: 1rem;
        fill: white;
        cursor: pointer;
        &:hover {
            fill: gray;
        }
    }
    .content__card-star {
        width: 2rem;
        height: 1rem;
        fill: transparent;
        cursor: pointer;
        &:hover {
            fill: white;
        }
    }
    .content__card-star_active {
        fill: white;
    }
}
</style>