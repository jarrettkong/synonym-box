<template>
  <form class="synonym-form" v-on:submit="handleSubmit">
    <input type="text" v-model="inputValue" />
    <input type="submit" value="Search" />
  </form>
</template>

<script>
export default {
  app: "synonym-form",
  props: {
    getSynonyms: Function
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      await this.getSynonyms(this.inputValue);
    }
  },
  data() {
    return {
      inputValue: ""
    };
  }
};
</script>

<style scoped>
.synonym-form {
}
</style>