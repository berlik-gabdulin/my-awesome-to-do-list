<template>
  <div>
    <input type="text" placeholder="Что ищем?" v-model="search" id="search" />
    {{ search }}
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["tasks"],
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searchTask() {
      this.$emit("liveSearch", this.search);
    }
  }
};
</script>