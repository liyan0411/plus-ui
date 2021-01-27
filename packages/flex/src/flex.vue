<template>
  <div
    class="plus-flex"
    :class="[
      'plus-flex-direction-' + direction,
      'plus-flex-wrap-' + wrap,
      'plus-flex-justify-' + justify,
      'plus-flex-items-' + alignItems,
      'plus-flex-content-' + alignContent,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "plusFlex",
  props: {
    /**
     * flex-direction属性决定主轴的方向（即项目的排列方向）
     * 可选值：row | row-reverse | column | column-reverse;
     */
    direction: {
      type: String,
      default: "row",
    },
    /**
     * 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
     * 可选值：nowrap | wrap | wrap-reverse;
     */
    wrap: {
      type: String,
      default: "nowrap",
    },
    /**
     * justify-content属性定义了项目在主轴上的对齐方式。
     * 可选值：flex-start | flex-end | center | space-between | space-around
     */
    justify: {
      type: String,
      default: "flex-start",
    },
    /**
     * align-items属性定义项目在交叉轴上如何对齐
     * 可选值：flex-start | flex-end | center | baseline | stretch;
     */
    alignItems: {
      type: String,
      default: "flex-start",
    },
    /**
     * align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
     * 可选值：flex-start | flex-end | center | space-between | space-around | stretch;
     */
    alignContent: {
      type: String,
      default: "flex-start",
    },
  },
};
</script>

<style lang="scss" scoped>
.plus-flex {
  display: flex;
}
/**
*  flex-direction
*/
.plus-flex-direction-row {
  flex-direction: row;
}
.plus-flex-direction-row-reverse {
  flex-direction: row-reverse;
}
.plus-flex-direction-column {
  flex-direction: column;
}
.plus-flex-direction-column-reverse {
  flex-direction: column-reverse;
}

/**
*  flex-wrap
*/
.plus-flex-wrap-nowrap {
  flex-wrap: nowrap;
}
.plus-flex-wrap-wrap {
  flex-wrap: wrap;
}
.plus-flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse;
}

/**
*  justify-content
*/
.plus-flex-justify-flex-start {
  justify-content: flex-start;
}
.plus-flex-justify-flex-end {
  justify-content: flex-end;
}
.plus-flex-justify-center {
  justify-content: center;
}
.plus-flex-justify-space-between {
  justify-content: space-between;
}
.plus-flex-justify-space-around {
  justify-content: space-around;
}

/** 
* align-items
*/
.plus-flex-items-flex-start {
  align-items: flex-start;
}
.plus-flex-items-flex-end {
  align-items: flex-end;
}
.plus-flex-items-center {
  align-items: center;
}
.plus-flex-items-baseline {
  align-items: baseline;
}
.plus-flex-items-stretch {
  align-items: stretch;
}

/**
*  align-content
*/
.plus-flex-content-flex-start {
  align-content: flex-start;
}
.plus-flex-content-flex-end {
  align-content: flex-end;
}
.plus-flex-content-center {
  align-content: center;
}
.plus-flex-content-space-between {
  align-content: space-between;
}
.plus-flex-content-space-around {
  align-content: space-around;
}
.plus-flex-content-stretch {
  align-content: stretch;
}
</style>