<template>
  <div id="app">
    <h1>{{title}}</h1>
    <SynonymForm />
    <hr />
    <SynonymView v-bind:words="words" />
  </div>
</template>

<script>
import SynonymForm from "./components/SynonymForm";
import SynonymView from "./components/SynonymView";

export default {
  name: "app",
  components: {
    SynonymForm,
    SynonymView
  },
  data() {
    return {
      title: "Synonym Form",
      words: [{ word: "hello" }]
    };
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
