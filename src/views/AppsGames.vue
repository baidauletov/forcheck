<template>
    <div class="apps">
        <section class="apps-sidebar">
            <div 
                v-for="(item, index) in sideMenu" 
                :key="index"
                class="sidebar__item"
                @click="chooseMenu(index)"
            >
                <span v-if="activeItem === index" class="sidebar__arrow-wrapper">
                    <iconArrowRight class="sidebar__arrow" />
                </span>
                <span class="sidebar__text">
                    {{ item.title }}
                </span>
            </div>
        </section>
        <section class="apps-main">
            <h2 class="apps-main__title">
                Игры и приложения
            </h2>
            <div class="content">
                <v-row>
                    <v-col v-for="(item, index) in appsCards" :key="index" vs-w="2" class="content__card-wrapper">
                        <gameCard :product="item" />
                    </v-col>
                </v-row>
            </div>
        </section>
    </div>
</template>

<script>
import gameCard from '@/components/GameCard.vue'
import iconArrowRight from '@/components/icons/IconArrowRight.vue'
// import iconStar from './../components/icons/iconStar.vue'
import defaultImage from '@/assets/default-app.png'

export default {
    name: 'appGames',

    components: {
        iconArrowRight,
        // iconStar,
        gameCard
    },

    data() {
        return {
            activeItem: 0,
            defaultImage: defaultImage,
            sideMenu: [
                {
                    title: 'Все',
                    type: 'all'
                },
                {
                    title: 'Недавние',
                    type: 'recent'
                },
                {
                    title: 'Online',
                    type: 'online'
                },
                {
                    title: 'Лаунчеры',
                    type: 'launcher'
                },
                {
                    title: 'Гонки',
                    type: 'race'
                },
                {
                    title: 'Action',
                    type: 'action'
                },
                {
                    title: 'Стратегии',
                    type: 'Strategy'
                },
                {
                    title: 'Браузеры',
                    type: 'browser'
                },
                {
                    title: 'Программы',
                    type: 'apps'
                },
            ],
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
            ]
        }
    },

    methods: {
        chooseMenu(index) {
            this.activeItem = index
        }
    }
}
</script>

<style lang="scss">
.apps {
    display: flex;
    padding: 2rem 5rem 0 12rem;
    .apps-sidebar {
        display: flex;
        flex-direction: column;
        padding-top: 8rem;
        padding-right: 5rem;
        .sidebar__item {
            position: relative;
            height: 2.375rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            .sidebar__arrow-wrapper {
                position: absolute;
                top: 0.350rem;
                left: -1.5rem;
                width: 1rem;
                height: 0.5rem;
                .sidebar__arrow {
                    fill: rgb(47, 1, 112)
                }   
            }
            .sidebar__text {
                display: inline-block;
                width: 100%;
                text-align: left;
                &:hover {
                    color: rgb(47, 1, 112);
                }
            } 
        }
    }
    .apps-main {
        width: 100%;
        padding-right: 12%;
        .apps-main__title {
            font-weight: 600;
            text-align: left;
            padding-bottom: 5.5rem;
        }
        .content {
            width: 100%;
            .content__card-wrapper {
                width: 100%;
                height: 15rem;
                padding: 0 0.5rem;
                margin-bottom: 1rem;
                cursor: pointer;
                .content__card {
                    background: gray;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    position: relative;
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
            }
        }
    }
}
</style>