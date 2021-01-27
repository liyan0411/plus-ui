<template>
  <div class="plus-row">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'plusRow'
}
</script>

<style lang="scss" scoped>
.plus-row:after {
	content: "";
	display: table;
	clear: both
}
</style>