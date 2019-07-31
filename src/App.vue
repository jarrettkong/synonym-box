<template>
  <div class="app">
    <h1>{{title}}</h1>
    <SynonymForm v-bind:getSynonyms="getSynonyms" />
    <hr />
    <output class="app-output">
      <div v-if="error">
        <h3>{{error}}</h3>
      </div>
      <div v-else v-for="data in wordData">
        <SynonymView v-bind:data="data" v-bind:updateQuery="updateQuery" />
      </div>
    </output>
  </div>
</template>

<script>
import SynonymForm from "./components/SynonymForm";
import SynonymView from "./components/SynonymView";

export default {
  name: "App",
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
        const wordData = data.reduce((acc, result) => {
          acc.push({
            definition: `${result.fl}. ${result.shortdef[0]}`,
            synonyms: result.meta.syns[0]
          });
          return acc;
        }, []);
        this.wordData = wordData;
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
      title: "SynonymBox",
      wordData: [],
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

html,
body {
  margin: 0;
  padding: 0;
  line-height: 1.4;
  font-size: 16;
}

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px;
  margin: auto;
  max-width: 1300px;
}

h1 {
  font-size: 60px;
}

hr {
  margin: 50px 0;
  border: 0;
  border-top: 1px solid lightgrey;
}

.app-output {
  display: grid;
  grid-gap: 20px;
}
</style>
