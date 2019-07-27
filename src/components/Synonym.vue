<template>
  <div class="word-item" v-bind:class="{'expanded':expanded}" v-on:click="toggleExpand">
    <h3>{{word.word}}</h3>
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
.expanded {
  border: 1px solid red;
}
</style>
