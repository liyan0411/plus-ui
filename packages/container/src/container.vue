<template>
  <div class="plus-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "plusContainer",
};
</script>

<style lang="scss" scoped>
/* 栅栏布局 */
.plus-container {
  position: relative;
  background: #fff;
  overflow: hidden;
}

.plus-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  transform: scale(0.5);
  transform-origin: 0 0;
  pointer-events: none;
  box-sizing: border-box;
}
</style>
