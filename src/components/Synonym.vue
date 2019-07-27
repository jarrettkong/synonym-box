<template>
  <div class="word-item" v-bind:class="{'expanded':expanded}" v-on:click="toggleExpand">
    <h3>{{word.word}}</h3>
    <div v-if="expanded" v-for="syn in synonyms">
      <p>{{syn}}</p>
    </div>
  </div>
</template>

<script>
export default {
  app: "synonym",
  props: {
    word: Object
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
      this.expanded && this.getSynonyms();
    },
    async getSynonyms() {
      if (!this.synonyms.length) {
        try {
          const res = await fetch(
            `https://dictionaryapi.com/api/v3/references/thesaurus/json/${this.word.word}?key=${process.env.VUE_APP_DICTIONARY_API_KEY}`
          );
          const data = await res.json();
          this.synonyms = data[0].meta.syns[0];
        } catch (err) {
          console.log(err.message);
        }
      }
    }
  },
  data() {
    return {
      expanded: false,
      synonyms: []
    };
  }
};
</script>

<style>
.word-item:hover {
  cursor: pointer;
}
.expanded {
  border: 1px solid red;
}
</style>
