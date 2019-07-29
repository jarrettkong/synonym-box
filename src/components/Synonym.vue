<template>
  <div class="word-item" @click="handleClick">
    <h3>{{synonym}}</h3>
  </div>
</template>

<script>
export default {
  app: "Synonym",
  props: {
    synonym: String,
    updateQuery: Function
  },
  methods: {
    handleClick() {
      this.updateQuery(this.synonym);
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
