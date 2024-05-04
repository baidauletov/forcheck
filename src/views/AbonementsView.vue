<template>
  <div class="abonements-wrapper">
    <div class="abonements">
      <h2>{{ title }}</h2>
      <v-row>
        <v-col cols="1.5" class="border-right abonements-item abo-title"
          >Осталось</v-col
        >
        <v-col cols="1.5" class="border-right abonements-item abo-title"
          >Название</v-col
        >
        <v-col cols="3" class="border-right abonements-item abo-title"
          >Текущий период действий</v-col
        >
        <v-col cols="2" class="border-right abonements-item abo-title"
          >Все периоды действия</v-col
        >
        <v-col cols="2" class="border-right abonements-item abo-title"
          >Зоны действия</v-col
        >
        <v-col cols="2" class="abonements-item abo-title"></v-col>
      </v-row>
      <v-row
        v-for="(item, index) in aboList"
        :key="index"
        class="border-bottom"
      >
        <v-col cols="1.5" class="border-right abonements-item">
          {{ item.time }}
        </v-col>
        <v-col cols="1.5" class="border-right abonements-item">
          {{ item.title }}
        </v-col>
        <v-col cols="3" class="border-right abonements-item">
          {{ item.currentPeriod }}
        </v-col>
        <v-col cols="2" class="border-right abonements-item">
          {{ item.actionPeriods }}
        </v-col>
        <v-col cols="2" class="border-right abonements-item">
          <div>
            <span
              v-for="(innerItem, innerIndex) in item.actionZones"
              :key="innerIndex"
            >
              {{ innerItem }}
              <span v-if="item.actionZones.length - 1 !== innerIndex">,</span>
            </span>
          </div>
        </v-col>
        <v-col cols="2" class="abonements-item button-item">
          <v-button
            :class="{ 'button-acitve': item.activeStatus }"
            :color="item.activeStatus ? 'primary' : 'success'"
            class="button"
          >
            Активировать
          </v-button>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'abonements-view',

  data() {
    return {
      title: 'Мои абонементы',
      aboList: [
        {
          time: '00:05',
          title: '3+2',
          currentPeriod: 'пн 00:00 - вс 24:00 (осталось 21 ч 43 мин)',
          actionPeriods: 'пн 00:00 - вс 24:00',
          actionZones: ['PS4', 'Общий зал', 'Курящий VIP'],
          activeStatus: false,
        },
        {
          time: '00:19',
          title: '2+1',
          currentPeriod: 'пн 00:00 - вс 24:00 (осталось 21 ч 43 мин)',
          actionPeriods: 'пн 00:00 - вс 24:00',
          actionZones: ['PS4', 'Общий зал', 'Курящий VIP'],
          activeStatus: false,
        },
        {
          time: '00:23',
          title: '1+2',
          currentPeriod: 'пн 00:00 - вс 24:00 (осталось 21 ч 43 мин)',
          actionPeriods: 'пн 00:00 - вс 24:00',
          actionZones: ['PS4', 'Общий зал'],
          activeStatus: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.abonements-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2rem;
}
.abonements {
  width: 90%;
  max-height: 90%;
  background: rgb(20, 19, 17);
  padding: 2rem 2.5rem;
  h2 {
    text-align: left;
    padding: 0 0 2rem 0;
    font-weight: 600;
  }
  .border-right {
    border-right: 1px solid gray;
    margin: 0.5rem 0;
  }
  .border-bottom {
    border-bottom: 1px solid gray;
  }
  .abonements-item {
    display: flex;
    padding: 0.25rem 0.5rem;
    text-align: left;
    font-size: 0.875rem;
    font-weight: 600;
  }
  .abo-title {
    font-size: 1rem;
    font-weight: 600;
  }
  .button-item {
    width: 100%;
    .button {
      width: 100%;
      height: 3rem;
      .vs-button--text {
        text-transform: uppercase;
      }
    }
  }
}
</style>
