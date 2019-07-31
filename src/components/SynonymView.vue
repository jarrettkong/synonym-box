<template>
  <div class="synonym-view">
    <h3 class="definition">
      Definition:
      <span class="definition-title">{{ data.definition }}</span>
    </h3>
    <div class="synonym-output">
      <div v-for="synonym in data.synonyms" v-bind:key="synonym.id">
        <Synonym v-bind:synonym="synonym" v-bind:updateQuery="updateQuery" />
      </div>
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

<style scoped>
.synonym-view {
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 0 15px;
}

.definition {
  margin-bottom: 0;
}

.definition-title {
  font-style: italic;
  font-weight: normal;
}

.synonym-output {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
