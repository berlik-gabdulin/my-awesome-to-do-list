<template>
  <div class="task-item__wrapper">
    <div class="task-item" v-for="task in tasks" :key="task.id">
      <div class="task-item__checkbox-wrp">
        <input type="checkbox" class="task-item__checkbox" />
      </div>
      <div class="task-item__id">{{ task.id }}</div>
      <div class="task-item__title">{{ task.taskTitle }}</div>
      <div class="task-item__description">{{ task.taskDescription }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tasks"]
};
</script>

<style lang="scss">
@import "~@/assets/scss/all.scss";
.task-item {
  box-shadow: $shadow;
  &:nth-child(2n) {
    background: $light;
  }
}
</style>