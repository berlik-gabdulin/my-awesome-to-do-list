<template>
  <div class="add-form">
    <input type="text" name="taskTitle" class="add-form__input" placeholder="Название задачи">
    <textarea name="taskDescription" id="" cols="30" rows="10" class="add-form__input" placeholder="Описание задачи"></textarea>
    <button type="submit" class="add-form__button"  >Добавить задачу</button>
  </div>
</template>

<script>
export default {
  name: "AddForm",
  props: {
    // msg: String
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
