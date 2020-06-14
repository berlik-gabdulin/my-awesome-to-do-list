<template>
  <div class='add-form'>
    <input
      type='text'
      name='title'
      class='add-form__title input'
      placeholder='Название задачи'
      v-model='title'
      @input='btnDisable'
    />
    <textarea
      name='descr'
      cols='30'
      rows='5'
      class='add-form__descr input'
      placeholder='Описание задачи'
      v-model='descr'
    ></textarea>
    <button
      type='submit'
      class='btn'
      v-on:click='addTask'
      :disabled='addBtnDisable'
      :class='{ "btn-inactive" : addBtnDisable, "btn-danger" : !addBtnDisable }'
    >Добавить задачу</button>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  props: [],
  data() {
    return {
      title: '',
      descr: ''
    };
  },
  methods: {
    addTask() {
      if (this.title !== '') {
        this.$store.commit('addTask', {
          title: this.title,
          descr: this.descr
        });
        this.title = '';
        this.descr = '';
      }
    },
    btnDisable() {
      return this.$store.commit('setAddBtn', this.title);
    }
  },
  computed: {
    addBtnDisable() {
      return this.$store.state.addBtnDisable;
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.add-form {
  display: flex;
  flex-wrap: wrap;
  &__title {
    width: 40%;
    margin-right: 10px;
  }
  &__descr {
    width: calc(60% - 10px);
    resize: none;
  }
}
@media screen and (max-width: 768px) {
  .add-form {
    display: flex;
    flex-direction: column;
    &__title {
      width: 100%;
      margin-right: 0;
    }
    &__descr {
      width: 100%;
    }
  }
}
</style>