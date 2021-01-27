<template>
  <div
  class="plus-col"
    :class="[
      !!span ? 'plus-col-' + span:'',
      !!offset ? 'plus-offset-' + offset:'',
      ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:"plusCol",
    props:{
	span: {
      type: Number,
    },
    offset: {
      type: Number,
    },
	}
}
</script>

<style lang="scss" scoped>
.plus-col {
	float: left;
	box-sizing: border-box;
	width: 0
}

.plus-col-1 {
	width: 4.16667%
}

.plus-offset-1 {
	margin-left: 4.16667%
}

.plus-col-2 {
	width: 8.33333%
}

.plus-offset-2 {
	margin-left: 8.33333%
}

.plus-col-3 {
	width: 12.5%
}

.plus-offset-3 {
	margin-left: 12.5%
}

.plus-col-4 {
	width: 16.66667%
}

.plus-offset-4 {
	margin-left: 16.66667%
}

.plus-col-5 {
	width: 20.83333%
}

.plus-offset-5 {
	margin-left: 20.83333%
}

.plus-col-6 {
	width: 25%
}

.plus-offset-6 {
	margin-left: 25%
}

.plus-col-7 {
	width: 29.16667%
}

.plus-offset-7 {
	margin-left: 29.16667%
}

.plus-col-8 {
	width: 33.33333%
}

.plus-offset-8 {
	margin-left: 33.33333%
}

.plus-col-9 {
	width: 37.5%
}

.plus-offset-9 {
	margin-left: 37.5%
}

.plus-col-10 {
	width: 41.66667%
}

.plus-offset-10 {
	margin-left: 41.66667%
}

.plus-col-11 {
	width: 45.83333%
}

.plus-offset-11 {
	margin-left: 45.83333%
}

.plus-col-12 {
	width: 50%
}

.plus-offset-12 {
	margin-left: 50%
}

.plus-col-13 {
	width: 54.16667%
}

.plus-offset-13 {
	margin-left: 54.16667%
}

.plus-col-14 {
	width: 58.33333%
}

.plus-offset-14 {
	margin-left: 58.33333%
}

.plus-col-15 {
	width: 62.5%
}

.plus-offset-15 {
	margin-left: 62.5%
}

.plus-col-16 {
	width: 66.66667%
}

.plus-offset-16 {
	margin-left: 66.66667%
}

.plus-col-17 {
	width: 70.83333%
}

.plus-offset-17 {
	margin-left: 70.83333%
}

.plus-col-18 {
	width: 75%
}

.plus-offset-18 {
	margin-left: 75%
}

.plus-col-19 {
	width: 79.16667%
}

.plus-offset-19 {
	margin-left: 79.16667%
}

.plus-col-20 {
	width: 83.33333%
}

.plus-offset-20 {
	margin-left: 83.33333%
}

.plus-col-21 {
	width: 87.5%
}

.plus-offset-21 {
	margin-left: 87.5%
}

.plus-col-22 {
	width: 91.66667%
}

.plus-offset-22 {
	margin-left: 91.66667%
}

.plus-col-23 {
	width: 95.83333%
}

.plus-offset-23 {
	margin-left: 95.83333%
}

.plus-col-24 {
	width: 100%
}

.plus-offset-24 {
	margin-left: 100%
}
</style>