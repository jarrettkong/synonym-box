<template>
  <form id="synonym-form">
    <input type="text" />
    <input type="submit" value="Search" />
  </form>
</template>

<script>
export default {
  app: "synonym-form",
  props: {}
};
</script>

<style scoped>
#synonym-form {
  border: 1px solid red;
}
</style>