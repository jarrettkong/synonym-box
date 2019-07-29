<template>
  <div>
    <h3>
      <em>Definition</em>
      : {{ data.definition }}
    </h3>
    <div v-for="synonym in data.synonyms" v-bind:key="synonym.id">
      <Synonym v-bind:synonym="synonym" v-bind:updateQuery="updateQuery" />
    </div>
  </div>
</template>


<script>
import Synonym from "./Synonym";

export default {
  app: "SynonymView",
  components: {
    Synonym
  },
  props: {
    data: Object,
    updateQuery: Function
  }
};
</script>
