<template>
  <div id="app">
    <header>
      <h1>My Awesome TodoList</h1>
    </header>
    <AddForm :tasks="tasks" @newTask="addTask"></AddForm>
    <TaskItem :tasks="tasks" />
  </div>
</template>

<script>
import AddForm from "./components/AddForm.vue";
import TaskItem from "./components/TaskItem.vue";

export default {
  name: "App",
  data() {
    return {
      tasks: [
          {
            // id: 0,
            taskTitle: "Task 1 title",
            taskDescription: "Lorem ipsum dolor sit amet"
          },
          {
            // id: 1,
            taskTitle: "Task 2 title",
            taskDescription:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
            // id: 2,
            taskTitle: "Task 3 title",
            taskDescription:
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            // id: 4,
            taskTitle: "Task 4 title",
            taskDescription:
              "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        ]
    };
  },
  methods: {
    addTask(task) {
      console.log(`Task title: ${task.taskTitle}, descr: ${task.taskDescription}`);
      this.tasks.push({
          taskTitle : task.taskTitle,
          taskDescription : task.taskDescription
        })
    }
  }
  ,
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
