<template>
  <div class="task-item"></div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {}
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