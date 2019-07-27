<template>
  <div>
    <div v-for="word in words" v-bind:key="word.id">
      <Synonym v-bind:word="word" />
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
    words: Array
  }
};
</script>
