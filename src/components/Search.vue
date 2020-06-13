<template>
  <div>
    <input type='text' placeholder='Что ищем?' v-model='search' @input='searchTask' id='search' class='input' />
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: [],
  data() {
    return {
      search: ''
    };
  },
  methods: {
    searchTask() {
      return this.$store.commit('searchTask',  this.search);
    }
  }
};
</script>