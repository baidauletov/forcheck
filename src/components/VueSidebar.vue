<template>
    <div class="vue-sidebar">
        <div class="first-block">
            <span class="first-block__avatar-wrapper">
                <router-link to="/login-edit">
                    <iconAvatar />
                </router-link>
            </span>
            <div class="first-block__name-wrapper">
                <span>
                    <router-link to="/login-edit">
                        <span class="first-block__accaunt">Мои аккаунты</span><iconArrowRight class="icon-arrow" />
                    </router-link>
                </span>
                <router-link to="/login-edit">
                    <span class="first-block__username">
                        {{ userNickname }}
                    </span>
                </router-link>
            </div>
        </div>
        <div class="second-block">
            <div class="second-block__left">
                <span class="second-block__left-title">Осталось <span class="vue-sidebar__dot"></span> чч:мм</span>
                <span class="second-block__left-data">00:00</span>
            </div>
            <div class="second-block__right">
                <span class="second-block__right-title">Сессия по тарифу</span>
                <span class="second-block__right-data">0.00 KZT/час</span>
            </div>
        </div>
        <div class="third-block">
            <div class="third-block__top">
                <span class="third-block__top-title">Баланс <span class="vue-sidebar__dot"></span> KZT <iconArrowRight class="icon-arrow" /></span>
                <span class="third-block__top-data">80.43</span>
            </div>
            <div class="third-block__bottom">
                <button class="third-block__button">
                    <iconCash class="icon-arrow" />
                    ЧЕКОМ
                </button>
                <button class="third-block__button third-block__button_special">
                    <iconCashOnline class="icon-arrow" />
                    ОНЛАЙН
                </button>
            </div>
        </div>
        <div class="fourth-block">
            <span class="fourth-block__title">Программа лояльности</span>
            <div class="fourth-block__slider-content">
                <span class="fourth-block__slider-content-start">0%</span>
                <span class="fourth-block__slider-content-end">3%</span>
            </div>
            <div class="fourth-block__slider-wrapper">
                <!-- <vue-slider v-model="loyaltyProgress"  /> -->
                <!-- disabled :marks='marks' :tooltip="'none'" dotSize="8" :railStyle="{ background: '#7136fa' }" -->
            </div>
            <div class="fourth-block__bottom">
                <span class="fourth-block__bottom-title">Персональная скидка</span>
                <span class="fourth-block__bottom-data">100%</span>
            </div>
        </div>
        <div class="fifth-block">
            <span class="fifth-block__title">
                Избранное
            </span>
            <div class="fifth-block__list">
                <div v-for="(item, index) in selectedApps" :key="index" class="fifth-block__item">
                    <!-- v-if="!item.link" -->
                    <span  class="fifth-block__placeholder"></span>
                    <!-- <img v-else class="fifth-block__item-icon" src="icon" alt="icon"> -->
                </div>
            </div>
        </div>
        <div class="sixth-block">
            <div class="sixth-block__left">
                <router-link to="/login-edit?tab=3">
                    <span class="sixth-block__left-title">
                        Последний заказ 
                        <iconArrowRight class="icon-arrow" />
                    </span>
                </router-link>
                <span class="sixth-block__left-data">
                    1 позиция
                </span>
            </div>
            <div class="sixth-block__right">
                <span class="sixth-block__right-title">
                    Статус
                </span>
                <span class="sixth-block__right-data">
                    Отменен
                </span>
            </div>
        </div>
    </div>
</template>

<!-- <script>
import iconArrowRight from '@/components/icons/IconArrowRight.vue'
import iconAvatar from '@/components/icons/IconAvatar.vue'
import iconCash from '@/components/icons/IconCash.vue'
import iconCashOnline from '@/components/icons/IconCashOnline.vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
    components: {
        iconArrowRight,
        iconAvatar,
        iconCash,
        iconCashOnline,
        VueSlider
    },

    data() {
        return {
            userNickname: 'User Nickname',
            loyaltyProgress: 3,
            marks: {
                '0': {
                    style: {
                        width: '8px',
                        height: '8px',
                        display: 'block',
                        backgroundColor: '#7136fa',
                        transform: 'translate(-2px, -2px)'
                    },
                    labelStyle: {
                        color: "transparent"
                    }
                },
                '100': {
                    style: {
                        width: '8px',
                        height: '8px',
                        display: 'block',
                        backgroundColor: '#7136fa',
                        transform: 'translate(-2px, -2px)'
                    },
                    labelStyle: {
                        color: "transparent"
                    }
                },
            },
            selectedApps: [
                {
                    img: '',
                    link: ''
                },
                {
                    img: '',
                    link: ''
                },
                {
                    img: '',
                    link: ''
                },
                {
                    img: '',
                    link: ''
                },
                {
                    img: '',
                    link: ''
                },
            ]
        }
    }

}
</script> -->

<script setup>
import iconArrowRigh from '@/components/icons/IconArrowRight.vue'
import iconAvata from '@/components/icons/IconAvatar.vue'
import iconCas from '@/components/icons/IconCash.vue'
import iconCashOnlin from '@/components/icons/IconCashOnline.vue'
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/antd.css'

import { ref } from 'vue'

const iconArrowRight = iconArrowRigh
const iconAvatar = iconAvata
const iconCash = iconCas
const iconCashOnline = iconCashOnlin

const userNickname = ref('User Nickname')
const loyaltyProgress = ref(3)
const marks = ref({
                '0': {
                    style: {
                        width: '8px',
                        height: '8px',
                        display: 'block',
                        backgroundColor: '#7136fa',
                        transform: 'translate(-2px, -2px)'
                    },
                    labelStyle: {
                        color: "transparent"
                    }
                },
                '100': {
                    style: {
                        width: '8px',
                        height: '8px',
                        display: 'block',
                        backgroundColor: '#7136fa',
                        transform: 'translate(-2px, -2px)'
                    },
                    labelStyle: {
                        color: "transparent"
                    }
                },
            })

const selectedApps = ([
                {
                    img: '',
                    link: ''
                },
                {
                    img: '',
                    link: ''
                },
                {
                    img: '',
                    link: ''
                },
                {
                    img: '',
                    link: ''
                },
                {
                    img: '',
                    link: ''
                },
            ])
</script>

<style lang="scss">
.vue-sidebar {
    right: 0px;
    top: 5rem;
    width: 21.5vw;
    // height: 90vh;
    background: #141414;
    border-radius: 0 0.25rem;
    border-left: 2px solid #5a5a5a;
    .icon-arrow {
        width: 0.75rem;
        height: 0.75rem;
        fill: #a7a7a7;
    }
    .first-block {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1.5rem 5rem 1.5rem 1.5rem;
        border-bottom: 1px solid #5a5a5a;
        .first-block__accaunt {
            padding-right: 0.5rem;
            color: #a7a7a7;
            font-size: 0.875rem;
        }
        .first-block__username {
            &:hover {
                color: #a7a7a7;
                cursor: pointer;
            }
        }
        .icon-arrow {
            width: 0.75rem;
            height: 0.75rem;
            fill: #a7a7a7;
        }
        .first-block__avatar-wrapper {
            border: 1px solid #a7a7a7;
            border-radius: 50%;
            padding: 0.5rem;
            cursor: pointer;
        }
        .first-block__name-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            padding-left: 3rem;
        }
    }
    .second-block {
        display: flex;
        padding: 1.25rem;
        border-bottom: 1px solid #5a5a5a;
        .second-block__left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .second-block__left-title {
                font-size: 0.875rem;
                color: #a7a7a7;
            }
            .second-block__left-data {
                font-size: 3rem;
            }
        }
        .second-block__right {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 3rem;
            .second-block__right-title {
                font-size: 0.875rem;
                color: #a7a7a7;
            }
            .second-block__right-data {
                font-size: 1.5rem;
                padding-top: 0.5rem;
            }
        }
    }
    .third-block {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        border-bottom: 1px solid #5a5a5a;
        .third-block__top {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .third-block__top-title {
                font-size: 0.875rem;
                color: #a7a7a7;
            }
            .third-block__top-data {
                font-size: 1.25rem;
            }
        }
        .third-block__bottom {
            display: flex;
            justify-content: space-between;
            padding: 1.5rem 0 0;
        }
        .third-block__button {
            padding: 0.75rem 0.5rem;
            width: 10.25rem;
            border-radius: 0.25rem;
            color: white;
            font-weight: 600;
            border: 1px solid #474747;
            background: #2b2b2b;
            font-size: 0.875rem;
            &:hover {
                opacity: 0.85;
            }
        }
        .third-block__button_special {
            background: #7136fa;
        }
    }
    .fourth-block {
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #5a5a5a;
        .fourth-block__title {
            font-size: 0.875rem;
            color: #a7a7a7;
            text-align: left;
            display: block;
        }
        .fourth-block__slider-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            .fourth-block__slider-content-start {
                font-size: 2rem;
                font-weight: 600;
            }
            .fourth-block__slider-content-end {
                color: #a7a7a7;
                font-weight: 600;
            }
        }
        .fourth-block__slider-wrapper {
            padding: 0.5rem;
        }
        .fourth-block__bottom {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .fourth-block__bottom-title {
                font-size: 0.875rem;
                color: #a7a7a7;
            }
            .fourth-block__bottom-data {
                font-size: 1.875rem;
                font-weight: 600;
            }
        }
    }
    .fifth-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1.25rem;
        border-bottom: 1px solid #5a5a5a;
        .fifth-block__title {
            font-size: 0.875rem;
            color: #a7a7a7;
        }
        .fifth-block__list {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0.5rem 0;
        }
        .fifth-block__placeholder {
            display: block;
            width: 3.5rem;
            height: 3.5rem;
            border: 1px dashed #a7a7a7;
            border-radius: 0.25rem;
        }
    }
    .sixth-block {
        padding: 1.25rem;
        display: flex;
        .sixth-block__left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-right: 3rem;
            .sixth-block__left-title {
                font-size: 0.875rem;
                color: #a7a7a7;
            }
            .sixth-block__left-data {
                font-weight: 600;
            }
        }
        .sixth-block__right {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-top: 0.25rem;
            .sixth-block__right-title {
                font-size: 0.875rem;
                color: #a7a7a7;
            }
            .sixth-block__right-data {
                background: #5a5a5a;
                color: #a7a7a7;
                border-radius: 0.25rem;
                font-size: 0.875rem;
                padding: 0.125rem 0.25rem;
            }
        }
    }
}
.vue-sidebar__dot {
    display: inline-block;
    background: #a7a7a7;
    border-radius: 50%;
    width: 0.25rem;
    height: 0.25rem;
    vertical-align:middle
}
.vue-slider-dot-handle-disabled {
    cursor: auto;
}
</style>