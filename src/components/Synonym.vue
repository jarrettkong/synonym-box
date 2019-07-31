<template>
  <div class="word-item" @click="handleClick">
    <h3 class="synonym">{{synonym}}</h3>
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

<style scoped>
.synonym {
  font-weight: normal;
  color: #008cff;
  padding: 0 5px;
  background-color: #efefef;
}

.word-item {
  cursor: pointer;
  margin: 10px;
}

.word-item:hover {
  cursor: pointer;
}
</style>
