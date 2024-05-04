<template>
  <div class="header">
    <div class="header__item logo d-flex justify-content-start">
      <router-link to="/">
        <img
          src="@/assets/default-logo.png"
          alt="logo"
          class="header__logo"
        />
      </router-link>
    </div>
    <div class="header__item d-flex align-items-center">
      <span
        v-for="(item, index) in menu"
        :key="index"
        @click="menuClick(item.type)"
        class="header__menu-item"
      >
        <template v-if="item.link">
          <router-link :to="item.link">
            {{ item.title }}
          </router-link>
        </template>
        <template v-else>
          {{ item.title }}
        </template>
      </span>
    </div>
    <div class="header__item d-flex align-items-center">
      <input type="text" class="search-block" placeholder="Поиск игры" />
    </div>
    <div
      class="header__item status d-flex align-items-center justify-content-between"
    >
      <div class="status-block">
        <div class="d-flex align-items-center">
          <span class="h-100">
            <iconMonitor class="header__icon" />
          </span>
          <span class="status-block__comp-number h-100 px-2">
            {{ comp_number }}
          </span>
        </div>
        <div class="d-flex align-items-center px-2">
          <span
            class="status-color"
            :style="{ background: statusColors[currentColor] }"
          ></span>
          <span class="status-block__hall">{{ currentHall }}</span>
        </div>
      </div>
      <div class="px-3">
        <button class="header__button">
          <iconLock class="header__icon" />
        </button>
        <button class="header__button" @click="showExitModal = true">
          <iconExit class="header__icon" />
        </button>
      </div>
    </div>
    <v-dialog
      v-model="shopModalShow"
      :title="shopTitle"
      background-color-popup="#141311"
      icon-close="x"
      class="show-modal"
    >
      <v-shop />
    </v-dialog>
    <v-dialog
      v-model="showExitModal"
      :title="'Выйти из системы'"
      background-color-popup="#141311"
      icon-close="x"
      class="show-exit"
    >
      <div>
        <h3 class="show-exit__title">Выйти из системы ?</h3>
        <div class="show-exit__buttons">
          <button @click="showExitModal = false" class="show-exit__button-item">
            Отмена
          </button>
          <button class="show-exit__button-item show-exit__button-item_red">
            Выйти
          </button>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import iconMonitor from '@/components/icons/IconMonitor.vue'
import iconLock from '@/components/icons/IconLock.vue'
import iconExit from '@/components/icons/IconExit.vue'
import vShop from '@/components/VShop.vue'

export default {
  name: 'vue-header',

  components: {
    iconMonitor,
    iconLock,
    iconExit,
    vShop,
  },

  props: {
    showShop: Boolean,
  },

  data() {
    return {
      menu: [
        {
          title: 'Игры и приложения',
          type: 'apps',
          link: '/apps',
        },
        {
          title: 'Мои абонементы',
          type: 'abonements',
          link: '/abonements',
        },
        {
          title: 'Магазин',
          type: 'shop',
        },
        {
          title: 'Файлы',
          type: 'files',
          link: '/files',
        },
      ],
      comp_number: 45,
      currentColor: 'green',
      currentHall: 'Общий зал',
      shopModalShow: false,
      showExitModal: false,
      shopName: 'Lord SHOP',
      statusColors: {
        green: 'green',
        red: 'red',
      },
    }
  },

  watch: {
    showShop(val) {
      console.log('val: ', val)
      this.shopModalShow = true
    },
    shopModalShow(val) {
      if (val === true) this.$emit('closeShop')
    },
  },

  computed: {
    shopTitle() {
      return 'Доступно сегодня в ' + this.shopName
    },
  },

  methods: {
    menuClick(type) {
      console.log('menu click: ', type)
      if (type === 'shop') {
        this.shopModalShow = true
      }
    },
  },
}
</script>

<style lang="scss">
.header {
  background: rgb(20, 20, 20);
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 10rem;
    height: 5.5rem;
  }
  .header__logo {
    width: 8rem;
    height: 5.5rem;
    object-fit: cover;
    cursor: pointer;
  }
  .header__button {
    background: rgb(56, 56, 56);
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid rgb(54, 54, 54);
    border-radius: 50%;
    cursor: pointer;
    margin-right: 0.5rem;
  }
  .header__icon {
    background: inherit;
    width: 1.5rem;
    height: 1.5rem;
    &:hover {
      fill: rgb(202, 200, 200);
      g {
        stroke: rgb(202, 200, 200);
      }
    }
  }
  .header__menu-item {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    padding-right: 1.5rem;
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover {
      color: rgb(175, 175, 175);
    }
    a {
      text-transform: uppercase;
    }
  }
  .search-block {
    background: #21201f;
    border-radius: 0.125rem;
    border: 1px solid #21201f;
    color: white;
    padding: 0.25rem 0.75rem;
    font-size: 1.125rem;
    font-weight: 500;
    &:hover {
      border: 1px solid white;
    }
  }
  .status {
    width: 20.5vw;
    border-left: 2px solid #5a5a5a;
    padding-left: 1rem;
  }
  .status-color {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }
  .status-block__hall {
    text-transform: lowercase;
    padding-left: 0.75rem;
  }
}
.show-modal {
  .vs-popup {
    width: 90% !important;
    color: white;
  }
  .vs-popup--close {
    color: white;
  }
  .vs-popup--close {
    transform: none !important;
    font-style: normal !important;
    font-size: 2rem;
    width: 4rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vs-popup--title h3 {
    font-size: 2.125rem !important;
    padding: 2rem 0 0.5rem 2rem !important;
  }
}
.show-exit {
  .vs-popup {
    color: white;
  }
  .vs-popup--close {
    color: white;
  }
  .vs-popup--close {
    transform: none !important;
    font-style: normal !important;
    font-size: 2rem;
    width: 4rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vs-popup--title h3 {
    font-size: 1.125rem !important;
    padding: 2rem 0 0.5rem 2rem !important;
  }
  .show-exit__title {
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 1rem;
  }
  .show-exit__buttons {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    .show-exit__button-item {
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      width: 9rem;
      background: #5a5a5a;
      color: white;
      margin-right: 1rem;
      margin-left: 1rem;
      &:hover {
        opacity: 0.9;
        color: #b5b2b2;
      }
    }
    .show-exit__button-item_red {
      background: red;
    }
  }
}
</style>
