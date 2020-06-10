<template>
  <div class="add-form">
    <input id="taskTitle" type="text" name="taskTitle" class="add-form__input" placeholder="Название задачи">
    <textarea id="taskDescription" name="taskDescription" cols="30" rows="5" class="add-form__input" placeholder="Описание задачи"></textarea>
    <button type="submit" class="add-form__button" v-on:click="addTask" >Добавить задачу</button>
  </div>
</template>

<script>
export default {
  name: "AddForm",
  props: ['tasks'],
  methods: {
    addTask() {
      let newTaskTitle = document.getElementById('taskTitle'),
          newTaskDescription = document.getElementById('taskDescription');
        
      if (newTaskTitle.value !== '') {

        // console.log(`Task title: ${newTaskTitle.value}, descr: ${newTaskDescription.value}`);
        
        this.$emit('newTask', {
          taskTitle : newTaskTitle.value,
          taskDescription : newTaskDescription.value
        })
        
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-form {
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  background: #c0c0c0;
  &__input {
    padding: 10px;
    width: 100%;
    min-height: 40px;
    margin-bottom: 15px;
    box-sizing: border-box;
    outline: none;
    border: 2px solid transparent;
    transition: .15s;
  }
  &__button {
    min-height: 40px;
    padding: 0 30px;
    border: none;
    background: #fff;
    cursor: pointer;
    transition: .15s;
    &:hover {
      background: #000;
      color: #fff;
    }
  }
}
</style>
