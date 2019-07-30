<template>
  <form class="synonym-form" @submit="handleSubmit">
    <input
      class="synonym-input"
      type="text"
      v-model="inputValue"
      placeholder="Enter a word to search for..."
    />
    <input class="synonym-submit" type="submit" value="Search" />
  </form>
</template>

<script>
export default {
  app: "SynonymForm",
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
  height: 40px;
  width: 75%;
  margin: auto;
}

.synonym-input {
  padding-left: 15px;
  height: 100%;
  font-size: 20px;
  width: 600px;
  border-radius: 5px 0 0 5px;
  border: 1px solid lightgrey;
}

.synonym-input:focus {
  outline: transparent
}

.synonym-submit {
  height: 100%;
  font-size: 20px;
  width: 100px;
  color: white;
  border-radius: 0 5px 5px 0;
  background-color: royalblue;
  border: 0;
}

.synonym-submit:focus {
  outline: transparent
}
</style>