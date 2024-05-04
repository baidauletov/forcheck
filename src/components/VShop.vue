<template>
    <div class="shop">
        <v-row>
            <v-col vs-w="9" vs-sm="6" class="shop-content">
                <div class="d-flex align-items-center">
                    <v-tabs>
                        <v-tab v-for="(item, index) in menuTabs" :key="index" :label="item.title">
                        </v-tab>
                    </v-tabs>
                    <input type="text" class="shop-search" placeholder="Поиск по названию">
                </div>
                <section class="shop__list-wrapper">
                    <v-row class="shop__list">
                        <v-col v-for="item in 20" :key="item" vs-w="4" class="shop__item">
                            <shop-card ></shop-card>
                        </v-col>
                    </v-row>
                </section>
            </v-col>
            <v-col vs-w="3" vs-sm="6" class="check-content">
                <div class="check-content__top">
                    <span class="check-content__top-title">
                        Корзина
                    </span>
                    <span class="check-content__top-button">
                        Удалить все
                    </span>
                </div>
                <div class="check-content__main">
                    Корзина пока пуста
                </div>
                <div class="check-content__bottom">
                    <div class="check-content__bottom-first">
                        <span class="check-content__bottom-first-title">Итого за заказ</span>
                        <span class="check-content__bottom-first-data">{{ shopSum }} KZT</span>
                    </div>
                    <input class="check-content__bottom-input" placeholder="Комментарии" type="text">
                    <div class="check-content__bottom-second">
                        <span class="check-content__button">Подогреть</span>
                        <span class="check-content__button">Оплата картой</span>
                        <span class="check-content__button">Оплата наличеыми</span>
                    </div>
                </div>
            </v-col>
        </v-row>  
    </div>
</template>

<script>
import shopCard from './ShopCard.vue'

export default {
    name: 'vShop',

    components: {
        shopCard
    },  

    data() {
        return {
            menuTabs: [
                {
                    title: 'Все',
                    type: 'all'
                },
                {
                    title: 'Все напитки',
                    type: 'all'
                },
                {
                    title: 'салаты/снэки',
                    type: 'all'
                },
                {
                    title: 'горячее/супы',
                    type: 'all'
                },
                {
                    title: 'стрит фуд/соусы',
                    type: 'all'
                },
                {
                    title: 'роллы/пицца',
                    type: 'all'
                },
                {
                    title: 'шоколадки',
                    type: 'all'
                },
                {
                    title: 'сигареты и пиво',
                    type: 'all'
                }
            ],
            extraMenu: [
                {
                    title: 'сеты/гарниры/хлеб',
                    type: 'all'
                },
                {
                    title: 'баланс',
                    type: 'all'
                },
            ],
            shopSum: '0.00'
        }
    }
}
</script>

<style lang="scss">
.shop {
    width: 100%;
    height: 80vh;
    background: #141311;
    color: white;
    overflow: hidden;
    .shop-content {
        // background: gray;
        padding: 0.5rem 1rem 0 0;
        ul {
            margin: 0 !important;
        }
        .vs-tabs--btn {
            span {
                font-size: 0.8rem !important;
                font-weight: 600 !important;
                text-transform: uppercase !important;
                transition: none;
                &:hover {
                    color: rgb(187, 187, 187) !important;
                }
            }
        }
        .vs-tabs-primary .con-ul-tabs .activeChild button, .vs-tabs-primary .con-ul-tabs button:not(:disabled){
            color: white !important;
        }
        .vs-tabs--content {
            padding-bottom: 0;
        }
        .shop-search {
            background: #21201f;
            border-radius: 0.125rem;
            border: 1px solid #21201f;
            color: white;
            padding: 0.25rem 0.875rem;
            font-size: 0.875rem;
            margin-right: 0.5rem;
            &:hover {
                border: 1px solid rgb(136, 136, 136);
            }
            &:focus {
                border: 1px solid rgb(136, 136, 136);
            }
        }
    }
    .check-content {
        background: #363636;
        border-radius: 0.125rem;
        height: 90%;
        min-height: 45rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .check-content__top {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem;
            border-radius: 0.125rem;
            background: #363636;
            border-bottom: 1px solid rgb(136, 136, 136);
            .check-content__top-button {
                text-decoration: underline;
                cursor: pointer;
                &:hover {
                    color: rgb(136, 136, 136);
                }
            }
        }
        .check-content__main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #21201f;
            height: 60vh;
            width: 100%;
        }
        .check-content__bottom {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            .check-content__bottom-first {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0 0.5rem 0;
                .check-content__bottom-first-title {
                    font-size: 0.875rem;
                    color: #a7a7a7;
                }
                .check-content__bottom-first-data {
                    font-size: 1.5rem;
                }
            }
            .check-content__bottom-input {
                background: #21201f;
                border-radius: 0.125rem;
                border: 1px solid #21201f;
                color: white;
                padding: 0.25rem 0.75rem;
                font-size: 1.125rem;
                font-weight: 500;
                width: 20rem;
                margin-bottom: 1rem;
                &:hover {
                    border: 1px solid white;
                }
            }
            .check-content__bottom-second {
                display: flex;
                justify-content: flex-start;
                .check-content__button {
                    border-bottom: 1px dashed #a7a7a7;
                    font-size: 0.875rem;
                    color:#a7a7a7;
                    cursor: pointer;
                    margin-right: 1rem;
                    &:hover {
                        color: white;
                    }
                }
            }
        }
    }
    .shop__list-wrapper {
        .shop__list {
            overflow-y: scroll;
            max-height: 50rem;
            box-sizing: border-box;
            position: relative;
            .shop__item {
                padding: 0.5rem;
            }
        }
    }
}
</style>