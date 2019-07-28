<template>
  <div>
    <div v-for="synonym in synonyms" v-bind:key="synonym.id">
      <Synonym v-bind:synonym="synonym" v-bind:updateQuery="updateQuery" />
    </div>
  </div>
</template>


<script>
import Synonym from "./Synonym";

export default {
  app: "synonym-view",
  components: {
    Synonym
  },
  props: {
    synonyms: Array,
    updateQuery: Function
  }
};
</script>
