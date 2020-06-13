<template>
  <form>
    <div class='loader' v-if='!isLoaded'>
      <span class='loader__text'>
        Загрузка
      </span>
      <img src='~@/assets/loader.gif' alt='' class='loader__img'>
    </div>
    <div class='task-item__wrp' v-if='isLoaded'>
      <div class='task-item' v-for='(task, index) in tasks' :key='index'>
        <div class='task-item__checkbox-wrp'>
          <input
            :id='`task-${task.id}`'
            type='checkbox'
            class='task-item__checkbox'
            @click='checkTask(task.id)'
          />
          <label :for='`task-${task.id}`'></label>
        </div>
        <div class='task-item__id'>{{ task.id }}</div>
        <div class='task-item__title'>{{ task.title }}</div>
        <div class='task-item__description'>{{ task.descr }}</div>
      </div>
      <button
        type='button'
        @click='toRemove'
        :disabled='removeBtnDisabled'
        class='btn'
        :class='{ "btn-inactive" : removeBtnDisabled, "btn-danger" : !removeBtnDisabled }'
      >Удалить</button>
      <button type='button' @click='setIsSorted' class='btn'>Фильтр</button>
    </div>
  </form>
</template>

<script>
export default {
  props: [],
  computed: {
    tasks() {
      return this.$store.getters.filteredTasks
    },
    isLoaded() {
      return this.$store.getters.isLoaded;
    },
    removeBtnDisabled() {
      return this.$store.state.removeBtnDisabled;
    }
  },
  methods: {
    
    checkTask(index) {
      return this.$store.commit('checkTask', index);
    },
    toRemove() {
      return this.$store.commit('toRemove');
    },
    setIsSorted() {
      this.$store.state.isSorted = !this.$store.state.isSorted;
      return this.$store.commit('isSorted', this.$store.state.isSorted);
    }
  },
  beforeMount(){
    this.$store.dispatch('asyncLoadTasks');
  },
};
</script>

<style scoped lang='scss'>
@import '~@/assets/scss/all.scss';
.task-item {
  display: flex;
  align-items: stretch;
  min-height: 100px;
  background: #21222c;
  color: #fff;
  &:nth-child(even) {
    background: $light;
    color: #21222c;
    .task-item__checkbox + label {
      border-color: $main;
    }
  }
  &:first-of-type {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:last-of-type {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-bottom: 30px;
  }
  > div {
    display: flex;
    padding: 5px 10px;
    box-sizing: border-box;
    border-right: 1px solid $dark !important;
    &:last-of-type {
      border: none !important;
    }
  }
  &__checkbox {
    display: none;
    &-wrp {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20%;
      max-width: 100px;
    }

    + label {
      display: flex;
      position: relative;
      width: 30px;
      height: 30px;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 3px solid #fff;
      transition: 0.15s;
      &:hover,
      &:focus {
        border-color: $accent !important;
      }
      &:before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: transparent;
        transition: 0.15s;
      }
    }
    &:checked + label {
      border-color: $accent !important;
      &:before {
        background: $accent;
      }
    }
  }
  &__id {
    align-items: center;
    font-size: 1.2rem;
    width: 20%;
    max-width: 100px;
    justify-content: center;
  }
  &__title {
    font-size: 1.4rem;
    align-items: center;
    width: 50%;
    max-width: 300px;
    justify-content: flex-start;
  }
  &__description {
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
}
    .loader {
      display: flex;
      flex-direction: column;
      padding: 10px 15px;
      min-height: 150px;
      justify-content: center;
      align-items: center;
      &__text {
        position: relative;
        font-size: 2em;
        z-index: 2;
      }
      &__img {
        position: relative;
        transform: translateY(-20px);
        width: 150px;
        z-index: 1;
      }
    }
</style>