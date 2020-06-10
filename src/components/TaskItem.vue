<template>
  <form class="task-item__wrapper">
    <div class="task-item" v-for="(task, index) in tasks" :key="index">
      <div class="task-item__checkbox-wrp">
        <input type="checkbox" class="task-item__checkbox" @click="checkTask(task.id)" />
      </div>
      <div class="task-item__id">{{ task.id }}</div>
      <div class="task-item__title">{{ task.taskTitle }}</div>
      <div class="task-item__description">{{ task.taskDescription }}</div>
    </div>
    <button type="button" @click="toRemove" :disabled="removeDisabled">Удалить</button>
  </form>
</template>

<script>
export default {
  props: ["tasks","removeDisabled"],
  methods: {
    checkTask(index) {
      this.$emit("checkTask", index);
    },
    toRemove() {
      this.$emit("toRemove");
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/all.scss";
.task-item {
  box-shadow: $shadow;
  &:nth-child(2n) {
    background: $light;
  }
}
</style>