<template>
  <div class="dashboard-view">
    <v-row>
        <v-col vs-w="6" vs-sm="12" class="dashboard-view__item-wrapper">
            <section class="dashboard-view__item">
                <div class="content-wrapper">
                    <div class="content content_average" @click="openShop">
                        <span class="content__title">
                            Абонементы
                        </span>
                    </div>
                </div>
                <div class="abonements__list">
                    <div v-for="(item, index) of abonements" :key="index" class="abonements__item">
                        <div class="abonements__item-time-wrapper">
                            <span class="abonements__item-time-wrapper-top">{{ item.time }}</span>
                            <span class="abonements__item-time-wrapper-bottom">{{ item.time2 }}</span>
                        </div>
                        <div class="abonements__item-center">
                            <span class="abonements__item-center-title">Старт через чч:мм</span>
                            <span class="abonements__item-center-start">{{ item.when }}</span>
                        </div>
                        <div class="abonements__item-button-wrapper">
                            <button class="abonements__item-button">
                                купить <span class="dot"></span> {{ item.cost }}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </v-col>
        <v-col vs-w="6" vs-sm="12" class="dashboard-view__item-wrapper">
            <section class="dashboard-view__item">
                <!-- <VueAgile :options="basicAgileOptions" class="vue-agile" >
                    <template slot="prevButton"><iconArrowLeft class="slider-button-icon" /></template>
                    <template slot="nextButton"><iconArrowRight class="slider-button-icon" /></template> 
                    <div v-for="(item, index) in news" :key="index" class="news__item-wrapper">
                        <div class="news__item">    
                            <div class="news__item-image-wrapper">
                                <img :src="item.image ? item.image : newsImage" alt="news image" class="news__item-image">
                            </div>
                            <div class="news__item-content">
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.content }}</p>
                            </div>
                        </div>
                    </div>
                </VueAgile> -->
            </section>
        </v-col>
        <v-col vs-w="6" vs-sm="12" class="dashboard-view__item-wrapper">
            <section class="dashboard-view__item">
                <div class="content-wrapper">
                    <div class="content">
                        <router-link to="/apps">
                            <span class="content__title">
                                Весь контент
                            </span>
                            <iconArrowRight class="arrow-icon" />
                        </router-link>
                    </div>
                </div>
                <div>
                    <v-row class="apps__list">
                        <v-col v-for="(item, index) in appsCards" :key="index" vs-w="3" class="apps__list-item">
                            <gameCard  :product="item"/>
                        </v-col>
                    </v-row>
                </div>
            </section>
        </v-col>
        <v-col vs-w="6" vs-sm="12" class="dashboard-view__item-wrapper">
            <section class="dashboard-view__item">
                <div class="content-wrapper">
                    <div class="content" @click="openShop">
                        <span class="content__title">
                            Магазин
                        </span>
                        <iconArrowRight class="arrow-icon" />
                    </div>
                </div>
                <div class="shop-content">
                    <v-row>
                        <v-col v-for="(item, index) in 4" :key="index" vs-w="6" class="shop-content__item">
                            <div @click="openShop">
                                <shopCard />
                            </div>
                        </v-col>
                    </v-row>   
                </div>
            </section>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import iconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import iconArrowRight from '@/components/icons/IconArrowRight.vue'
import shopCard from '@/components/ShopCard.vue'
import gameCard from '@/components/GameCard.vue'
import newsImage from '@/assets/default-news.jpg'
import defaultImage from '@/assets/default-app.png'
// import VueAgile from 'vue-agile'

export default {
    name: 'DashboardView',

    components: {
        // VueAgile,
        iconArrowLeft,
        iconArrowRight,
        shopCard,
        gameCard
    },

    data() {
        return {
            basicAgileOptions: {
                dots: false,
                navButtons: true,
                infinite: true,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 1099,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            },
            appsCards: [
                {
                    title: 'app1',
                    image: defaultImage,
                    checked: true
                },
                {
                    title: 'app2',
                    image: defaultImage
                },
                {
                    title: 'app3',
                    image: defaultImage
                },
                {
                    title: 'app4',
                    image: defaultImage
                },
                {
                    title: 'app5',
                    image: defaultImage
                },
                {
                    title: 'app6',
                    image: defaultImage
                },
                {
                    title: 'app7',
                    image: defaultImage
                },
                {
                    title: 'app8',
                    image: defaultImage
                },
                {
                    title: 'app9',
                    image: defaultImage
                },
                {
                    title: 'app10',
                    image: defaultImage
                },
                {
                    title: 'app11',
                    image: defaultImage
                },
                {
                    title: 'app12',
                    image: defaultImage
                }
            ],
            abonements: [
                {
                    time: '2+1',
                    time2: '3ч',
                    when: 'Сейчас',
                    cost: '1,200 KZT'
                },
                {
                    time: '3+2',
                    time2: '5ч',
                    when: 'Сейчас',
                    cost: '2,200 KZT'
                },
                {
                    time: '3+5',
                    time2: '8ч',
                    when: 'Сейчас',
                    cost: '3,200 KZT'
                }
            ],
            news: [
                {
                    image: '',
                    title: 'news1',
                    content: 'lorem ipsum',
                    link: '/'
                },
                {
                    image: '',
                    title: 'news2',
                    content: 'lorem ipsum',
                    link: '/'
                },
                {
                    image: '',
                    title: 'news3',
                    content: 'lorem ipsum',
                    link: '/'
                },
                {
                    image: '',
                    title: 'news4',
                    content: 'lorem ipsum',
                    link: '/'
                },
                {
                    image: '',
                    title: 'news5',
                    content: 'lorem ipsum',
                    link: '/'
                }
            ],
            newsImage: newsImage
        }
    },

    methods: {
        openShop() {
            console.log('dashboard')
            this.$emit('openShop')
        }
    }
}
</script>

<style lang="scss">
.dashboard-view {
    padding: 0.25rem 5rem;
    overflow-y: scroll;
    max-height: 52rem;
    .dashboard-view__item-wrapper {
        padding: 1rem;
        .dashboard-view__item {
            height: 30rem;
            background: gray;
            border-radius: 0.25rem;
            background: #131210;
            .vue-agile {
                height: 100%;
            }
            .news__item-wrapper {
                height: 100%;
                .news__item {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    .news__item-image-wrapper {
                        padding: 1rem;
                        height: 16rem;
                        .news__item-image {
                            width: 100%;
                            height: 100%;
                            aspect-ratio: 1.4;
                            object-fit: cover;
                        }
                    }
                    .news__item-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding: 0 0 0 1rem;
                        h4 {
                            text-align: left;
                        }
                        p {
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
    .apps__list {
        overflow-y: scroll;
        max-height: 25rem;
        .apps__list-item {
            padding: 0.5rem;
            height: 15rem;
        }
    }
    .agile__list {
        height: 90%;
    }
    .agile__actions {
        width: 6rem;
        padding-left: 1rem;
        .agile__nav-button  {
            background: transparent;
            border-color: transparent;
        }
        .slider-button-icon {
            width: 1.5rem;
            fill: white;
            &:hover {
                fill: gray;
            }
        }
    }
    .content-wrapper {
    }
    .content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 1rem 1rem 2rem;
        border-bottom: 1px solid rgb(167, 167, 167);
        cursor: pointer;
        &:hover {
            color: rgb(167, 167, 167);
            .arrow-icon{
                fill: rgb(167, 167, 167); 
            }
        }
    }
    .content_average {
        cursor: auto;
        &:hover {
            color: white
        }
    }
    .content__title {
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
    }
    .arrow-icon {
        width: 1.25rem;
        height: 0.875rem;
        fill: white;
        bottom: 0.075rem;
        position: relative;
    }
    .shop-content {
        .shop-content__item {
            cursor: pointer;
            padding: 0.5rem;
        }
    }
    .abonements__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        .abonements__item{
            display: flex;
            justify-content: space-between;
            padding: 1.5rem 0;
            width: 90%;
            border-bottom: 1px solid gray;
            .abonements__item-time-wrapper {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                .abonements__item-time-wrapper-top {
                    font-size: 1.125rem;
                    font-weight: 600;
                    padding-bottom: 0.5rem;
                }
                .abonements__item-time-wrapper-bottom {
                    font-size: 2.75rem;
                    line-height: 2.75rem;
                    font-weight: 600;
                }
            }
            .abonements__item-center {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                margin-right: 3.5rem;
                .abonements__item-center-title {
                    color: gray;
                    font-size: 0.750rem;
                }
                .abonements__item-center-start {
                    color: #71ffa0;
                    font-size: 1.125rem;
                    font-weight: 600;
                }
            }
            .abonements__item-button-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                .abonements__item-button {
                    color: white;
                    background: #7136fa;
                    border-radius: 0.25rem;
                    padding: 0.5rem 0.5rem;
                    text-transform: uppercase;
                    width: 17rem;
                    font-weight: 600;
                    font-size: 0.875rem;
                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
        }
    }
    .dot {
        display: inline-block;
        background: white;
        border-radius: 50%;
        width: 0.25rem;
        height: 0.25rem;
        vertical-align:middle
    }
}
</style>