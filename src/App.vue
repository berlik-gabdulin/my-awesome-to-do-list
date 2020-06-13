<template>
  <div id='app'>
    <header>
      <h1>My Awesome TodoList</h1>
    </header>
    <AddForm id='addTask' />
    <hr />
    <Search/>
    
    <TaskItem id='taskForm' />
  </div>
</template>

<script>
import AddForm from './components/AddForm.vue'
import TaskItem from './components/TaskItem.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    AddForm,
    TaskItem,
    Search
  },
  computed: {

  }
};
</script>

<style lang='scss'>
@import '~@/assets/scss/all.scss';
body {
  font-family: 'Ubuntu', sans-serif;
  background: $main;
  color: #100e17;
  font-weight: 100;
  padding: 15px;
}
hr {
  height: 2px;
  background: $main;
  border: none;
  margin: 10px 0px;
}
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  background: #fff;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  border: 1px solid $main;
  border-radius: 15px;
}
.btn {
  display: inline-block;
  padding: 0 30px;
  min-height: 40px;
  margin: 15px 10px 15px 0;
  box-sizing: border-box;
  outline: none;
  border-radius: 5px;
  border: 3px solid #acacac;
  background: #acacac;
  color: #fff;
  transition: 0.15s;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: 0.15s;
  &-primary {
    border: 3px solid $accent;
    background: $accent;
    color: #fff;
    &:hover {
      color: $accent !important;
      background: #fff !important;
    }
  }
  &-danger {
    border: 3px solid #a00;
    background: #a00;
    color: #fff;
    &:hover {
      color: #a00 !important;
      background: #fff !important;
    }
  }
  &-inactive {
    cursor: default;
    background: #f6f6f6 !important;
    color: #615d5c !important;
    border: 2px solid #615d5c !important;
  }
  &-success {
    background: #4fc08d;
    color: #fff;
  }
  &:hover {
    background: #000;
    color: #fff;
  }
}
.input {
  padding: 10px;
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  box-sizing: border-box;
  outline: none;
  border: 2px solid $main;
  border-radius: 5px;
  transition: 0.15s;
  &:active,
  &:focus {
    border: 2px solid $accent;
  }
}
</style>
