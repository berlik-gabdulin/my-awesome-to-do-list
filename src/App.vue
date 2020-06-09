<template>
  <div id="app">
    <header>
      <h1>My Awesome TodoList</h1>
    </header>
    <AddForm></AddForm>
    <TaskItem></TaskItem>
  </div>
</template>

<script>
import AddForm from "./components/AddForm.vue";
import TaskItem from "./components/TaskItem.vue";

export default {
  name: "App",
  components: {
    AddForm,
    TaskItem
  }
};
</script>

<style lang="scss">
@import "~@/assets/scss/all.scss";
body {
  font-family: "Ubuntu", sans-serif;
  font-weight: 100;
}
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  box-shadow: $shadow;
}
</style>
