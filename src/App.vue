<template>
  <div id="app">
    <h1>{{title}}</h1>
    <SynonymForm v-bind:getSynonyms="getSynonyms" />
    <hr />
    <div v-if="error">
      <h3>{{error}}</h3>
    </div>
    <div v-else>
      <SynonymView v-bind:synonyms="synonyms" v-bind:updateQuery="updateQuery" />
    </div>
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
  methods: {
    async getSynonyms(word) {
      try {
        const res = await fetch(
          `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.VUE_APP_DICTIONARY_API_KEY}`
        );
        const data = await res.json();
        this.synonyms = data[0].meta.syns[0];
        this.error = "";
      } catch (err) {
        this.error = `Unable to find any synonyms for "${word}".`;
      }
    },
    async updateQuery(word) {
      this.getSynonyms(word);
    }
  },
  data() {
    return {
      title: "Synonym Form",
      synonyms: [],
      error: ""
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
