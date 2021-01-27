<!--bnt.vue-->
<template>
  <span
    class="plus-btn"
    :class="[
      'plus-' + size + '-btn',
      'plus-' + type + '-btn',
      'plus-' + sharpe + '-btn',
      !!hover ? 'plus-hvr-' + hover : '',
      isdisabled ? 'isdisabled' : '',
    ]"
    :style="btnStyle"
    >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "plusBtn", // 这个名字很重要
  data() {
    return {
      btnStyle: {
        fontSize: this.fontSize,
        background: this.bgColor,
        height: this.basis,
        lineHeight: this.basis,
        paddingLeft:this.basis,
        paddingRight:this.basis
      },
    };
  },
  props: {
    size: {
      type: String,
      default: "normal",
    },
    type: {
      type: String,
      default: "none",
    },
    sharpe: {
      type: String,
      default: "square",
    },
    hover: {
      type: String,
      default: "",
    },
    isdisabled: {
      type: Boolean,
      default: false,
    },
    fontSize: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "",
    },
    basis: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../scss/global.scss";
.plus-btn {
  display: inline-block;
  text-align: center;
  background: $default;
  cursor: pointer;
  border-color: #eee;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  text-decoration: none;
  appearance: none;
  border: none;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
}

/*
* Button Colors 
*/
.plus-none-btn {
  background: $none;
}
.plus-primary-btn {
  background: $primary;
}
.plus-success-btn {
  background: $success;
}
.plus-info-btn {
  background: $info;
}
.plus-warning-btn {
  background: $warning;
}
.plus-danger-btn {
  background: $danger;
}

/*
* Button Sizes 
*/
.plus-giant-btn {
  //巨大
  font-size: 28px;
  height: 70px;
  line-height: 70px;
  padding: 0 70px;
}

.plus-jumbo-btn {
  //特大
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  padding: 0 60px;
}

.plus-large-btn {
  //大
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  padding: 0 50px;
}

.plus-normal-btn {
  //正常尺寸
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  padding: 0 40px;
}

.plus-small-btn {
  //小的
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  padding: 0 30px;
}

.plus-tiny-btn {
  //微小的
  font-size: 9.6px;
  height: 24px;
  line-height: 24px;
  padding: 0 24px;
}

/*
* Button Sharpe
*/
.plus-quare-btn {
  border-radius: 0;
}

.plus-box-btn {
  border-radius: 10px;
}

.plus-rounded-btn {
  border-radius: 4px;
}

.plus-pill-btn {
  border-radius: 200px;
}

.plus-circle-btn {
  border-radius: 100%;
}

/*
  * Button hover
  */
.plus-primary-btn:hover {
  background: rgba(13, 224, 224, 0.9);
}
.plus-success-btn:hover {
  background: rgba(92, 184, 92, 0.9);
}
.plus-info-btn:hover {
  background: rgba(51, 122, 183, 0.9);
}
.plus-warning-btn:hover {
  background: rgba(240, 173, 78, 0.9);
}
.plus-danger-btn:hover {
  background: rgba(217, 83, 79, 0.9);
}

.plus-primary-btn:hover,
.plus-success-btn:hover,
.plus-info-btn:hover,
.plus-warning-btn:hover,
.plus-danger-btn:hover {
  color: $white;
}

/*
* Button  Disabled
*/
.plus-btn:disabled,
.plus-btn.is-disabled {
  top: 0 !important;
  border: 1px solid #ddd !important;
  text-shadow: 0 1px 1px white !important;
  color: #333 !important;
  cursor: not-allowed !important;
  appearance: none !important;
  box-shadow: none !important;
  opacity: 0.8 !important;
}
.plus-primary-btn.is-disabled {
  background: $primary !important;
}
.plus-success-btn.is-disabled {
  background: $success !important;
}
.plus-info-btn.is-disabled {
  background: $info !important;
}
.plus-warning-btn.is-disabled {
  background: $warning !important;
}
.plus-danger-btn.is-disabled {
  background: $danger !important;
}

/* 2D TRANSITIONS */
/* Grow */
.plus-hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.plus-hvr-grow:hover,
.plus-hvr-grow:focus,
.plus-hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* Shrink */
.plus-hvr-shrink {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.plus-hvr-shrink:hover,
.plus-hvr-shrink:focus,
.plus-hvr-shrink:active {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}

/* Pulse */
@-webkit-keyframes hvr-pulse {
  25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes hvr-pulse {
  25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

.plus-hvr-pulse {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-pulse:hover,
.plus-hvr-pulse:focus,
.plus-hvr-pulse:active {
  -webkit-animation-name: hvr-pulse;
  animation-name: hvr-pulse;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

/* Pulse Grow */
@-webkit-keyframes hvr-pulse-grow {
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@keyframes hvr-pulse-grow {
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

.plus-hvr-pulse-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-pulse-grow:hover,
.plus-hvr-pulse-grow:focus,
.plus-hvr-pulse-grow:active {
  -webkit-animation-name: hvr-pulse-grow;
  animation-name: hvr-pulse-grow;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

/* Pulse Shrink */
@-webkit-keyframes hvr-pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes hvr-pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

.plus-hvr-pulse-shrink {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-pulse-shrink:hover,
.plus-hvr-pulse-shrink:focus,
.plus-hvr-pulse-shrink:active {
  -webkit-animation-name: hvr-pulse-shrink;
  animation-name: hvr-pulse-shrink;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

/* Push */
@-webkit-keyframes hvr-push {
  50% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes hvr-push {
  50% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.plus-hvr-push {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-push:hover,
.plus-hvr-push:focus,
.plus-hvr-push:active {
  -webkit-animation-name: hvr-push;
  animation-name: hvr-push;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* Pop */
@-webkit-keyframes hvr-pop {
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

@keyframes hvr-pop {
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

.plus-hvr-pop {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-pop:hover,
.plus-hvr-pop:focus,
.plus-hvr-pop:active {
  -webkit-animation-name: hvr-pop;
  animation-name: hvr-pop;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* Bounce In */
.plus-hvr-bounce-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.plus-hvr-bounce-in:hover,
.plus-hvr-bounce-in:focus,
.plus-hvr-bounce-in:active {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}

/* Bounce Out */
.plus-hvr-bounce-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.plus-hvr-bounce-out:hover,
.plus-hvr-bounce-out:focus,
.plus-hvr-bounce-out:active {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}

/* Rotate */
.plus-hvr-rotate {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.plus-hvr-rotate:hover,
.plus-hvr-rotate:focus,
.plus-hvr-rotate:active {
  -webkit-transform: rotate(4deg);
  transform: rotate(4deg);
}

/* Grow Rotate */
.plus-hvr-grow-rotate {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.plus-hvr-grow-rotate:hover,
.plus-hvr-grow-rotate:focus,
.plus-hvr-grow-rotate:active {
  -webkit-transform: scale(1.1) rotate(4deg);
  transform: scale(1.1) rotate(4deg);
}

/* Float */
.plus-hvr-float {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-float:hover,
.plus-hvr-float:focus,
.plus-hvr-float:active {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
}

/* Sink */
.plus-hvr-sink {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-sink:hover,
.plus-hvr-sink:focus,
.plus-hvr-sink:active {
  -webkit-transform: translateY(8px);
  transform: translateY(8px);
}

/* Bob */
@-webkit-keyframes hvr-bob {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }

  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }

  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}

@keyframes hvr-bob {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }

  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }

  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}

@-webkit-keyframes hvr-bob-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}

@keyframes hvr-bob-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}

.plus-hvr-bob {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-bob:hover,
.plus-hvr-bob:focus,
.plus-hvr-bob:active {
  -webkit-animation-name: hvr-bob-float, hvr-bob;
  animation-name: hvr-bob-float, hvr-bob;
  -webkit-animation-duration: 0.3s, 1.5s;
  animation-duration: 0.3s, 1.5s;
  -webkit-animation-delay: 0s, 0.3s;
  animation-delay: 0s, 0.3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}

/* Hang */
@-webkit-keyframes hvr-hang {
  0% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }

  50% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }

  100% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}

@keyframes hvr-hang {
  0% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }

  50% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }

  100% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}

@-webkit-keyframes hvr-hang-sink {
  100% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}

@keyframes hvr-hang-sink {
  100% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}

.plus-hvr-hang {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-hang:hover,
.plus-hvr-hang:focus,
.plus-hvr-hang:active {
  -webkit-animation-name: hvr-hang-sink, hvr-hang;
  animation-name: hvr-hang-sink, hvr-hang;
  -webkit-animation-duration: 0.3s, 1.5s;
  animation-duration: 0.3s, 1.5s;
  -webkit-animation-delay: 0s, 0.3s;
  animation-delay: 0s, 0.3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}

/* Skew */
.plus-hvr-skew {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.plus-hvr-skew:hover,
.plus-hvr-skew:focus,
.plus-hvr-skew:active {
  -webkit-transform: skew(-10deg);
  transform: skew(-10deg);
}

/* Skew Forward */
.plus-hvr-skew-forward {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.plus-hvr-skew-forward:hover,
.plus-hvr-skew-forward:focus,
.plus-hvr-skew-forward:active {
  -webkit-transform: skew(-10deg);
  transform: skew(-10deg);
}

/* Skew Backward */
.plus-hvr-skew-backward {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.plus-hvr-skew-backward:hover,
.plus-hvr-skew-backward:focus,
.plus-hvr-skew-backward:active {
  -webkit-transform: skew(10deg);
  transform: skew(10deg);
}

/* Wobble Vertical */
@-webkit-keyframes hvr-wobble-vertical {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }

  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }

  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes hvr-wobble-vertical {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }

  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }

  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.plus-hvr-wobble-vertical {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-wobble-vertical:hover,
.plus-hvr-wobble-vertical:focus,
.plus-hvr-wobble-vertical:active {
  -webkit-animation-name: hvr-wobble-vertical;
  animation-name: hvr-wobble-vertical;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* Wobble Horizontal */
@-webkit-keyframes hvr-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }

  33.3% {
    -webkit-transform: translateX(-6px);
    transform: translateX(-6px);
  }

  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }

  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }

  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes hvr-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }

  33.3% {
    -webkit-transform: translateX(-6px);
    transform: translateX(-6px);
  }

  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }

  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }

  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.plus-hvr-wobble-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-wobble-horizontal:hover,
.plus-hvr-wobble-horizontal:focus,
.plus-hvr-wobble-horizontal:active {
  -webkit-animation-name: hvr-wobble-horizontal;
  animation-name: hvr-wobble-horizontal;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* Wobble To Bottom Right */
@-webkit-keyframes hvr-wobble-to-bottom-right {
  16.65% {
    -webkit-transform: translate(8px, 8px);
    transform: translate(8px, 8px);
  }

  33.3% {
    -webkit-transform: translate(-6px, -6px);
    transform: translate(-6px, -6px);
  }

  49.95% {
    -webkit-transform: translate(4px, 4px);
    transform: translate(4px, 4px);
  }

  66.6% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }

  83.25% {
    -webkit-transform: translate(1px, 1px);
    transform: translate(1px, 1px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@keyframes hvr-wobble-to-bottom-right {
  16.65% {
    -webkit-transform: translate(8px, 8px);
    transform: translate(8px, 8px);
  }

  33.3% {
    -webkit-transform: translate(-6px, -6px);
    transform: translate(-6px, -6px);
  }

  49.95% {
    -webkit-transform: translate(4px, 4px);
    transform: translate(4px, 4px);
  }

  66.6% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }

  83.25% {
    -webkit-transform: translate(1px, 1px);
    transform: translate(1px, 1px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

.plus-hvr-wobble-to-bottom-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-wobble-to-bottom-right:hover,
.plus-hvr-wobble-to-bottom-right:focus,
.plus-hvr-wobble-to-bottom-right:active {
  -webkit-animation-name: hvr-wobble-to-bottom-right;
  animation-name: hvr-wobble-to-bottom-right;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* Wobble To Top Right */
@-webkit-keyframes hvr-wobble-to-top-right {
  16.65% {
    -webkit-transform: translate(8px, -8px);
    transform: translate(8px, -8px);
  }

  33.3% {
    -webkit-transform: translate(-6px, 6px);
    transform: translate(-6px, 6px);
  }

  49.95% {
    -webkit-transform: translate(4px, -4px);
    transform: translate(4px, -4px);
  }

  66.6% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }

  83.25% {
    -webkit-transform: translate(1px, -1px);
    transform: translate(1px, -1px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@keyframes hvr-wobble-to-top-right {
  16.65% {
    -webkit-transform: translate(8px, -8px);
    transform: translate(8px, -8px);
  }

  33.3% {
    -webkit-transform: translate(-6px, 6px);
    transform: translate(-6px, 6px);
  }

  49.95% {
    -webkit-transform: translate(4px, -4px);
    transform: translate(4px, -4px);
  }

  66.6% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }

  83.25% {
    -webkit-transform: translate(1px, -1px);
    transform: translate(1px, -1px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

.plus-hvr-wobble-to-top-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-wobble-to-top-right:hover,
.plus-hvr-wobble-to-top-right:focus,
.plus-hvr-wobble-to-top-right:active {
  -webkit-animation-name: hvr-wobble-to-top-right;
  animation-name: hvr-wobble-to-top-right;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* Wobble Top */
@-webkit-keyframes hvr-wobble-top {
  16.65% {
    -webkit-transform: skew(-12deg);
    transform: skew(-12deg);
  }

  33.3% {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }

  49.95% {
    -webkit-transform: skew(-6deg);
    transform: skew(-6deg);
  }

  66.6% {
    -webkit-transform: skew(4deg);
    transform: skew(4deg);
  }

  83.25% {
    -webkit-transform: skew(-2deg);
    transform: skew(-2deg);
  }

  100% {
    -webkit-transform: skew(0);
    transform: skew(0);
  }
}

@keyframes hvr-wobble-top {
  16.65% {
    -webkit-transform: skew(-12deg);
    transform: skew(-12deg);
  }

  33.3% {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }

  49.95% {
    -webkit-transform: skew(-6deg);
    transform: skew(-6deg);
  }

  66.6% {
    -webkit-transform: skew(4deg);
    transform: skew(4deg);
  }

  83.25% {
    -webkit-transform: skew(-2deg);
    transform: skew(-2deg);
  }

  100% {
    -webkit-transform: skew(0);
    transform: skew(0);
  }
}

.plus-hvr-wobble-top {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.plus-hvr-wobble-top:hover,
.plus-hvr-wobble-top:focus,
.plus-hvr-wobble-top:active {
  -webkit-animation-name: hvr-wobble-top;
  animation-name: hvr-wobble-top;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* Wobble Bottom */
@-webkit-keyframes hvr-wobble-bottom {
  16.65% {
    -webkit-transform: skew(-12deg);
    transform: skew(-12deg);
  }

  33.3% {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }

  49.95% {
    -webkit-transform: skew(-6deg);
    transform: skew(-6deg);
  }

  66.6% {
    -webkit-transform: skew(4deg);
    transform: skew(4deg);
  }

  83.25% {
    -webkit-transform: skew(-2deg);
    transform: skew(-2deg);
  }

  100% {
    -webkit-transform: skew(0);
    transform: skew(0);
  }
}

@keyframes hvr-wobble-bottom {
  16.65% {
    -webkit-transform: skew(-12deg);
    transform: skew(-12deg);
  }

  33.3% {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }

  49.95% {
    -webkit-transform: skew(-6deg);
    transform: skew(-6deg);
  }

  66.6% {
    -webkit-transform: skew(4deg);
    transform: skew(4deg);
  }

  83.25% {
    -webkit-transform: skew(-2deg);
    transform: skew(-2deg);
  }

  100% {
    -webkit-transform: skew(0);
    transform: skew(0);
  }
}

.plus-hvr-wobble-bottom {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}
.plus-hvr-wobble-bottom:hover,
.plus-hvr-wobble-bottom:focus,
.plus-hvr-wobble-bottom:active {
  -webkit-animation-name: hvr-wobble-bottom;
  animation-name: hvr-wobble-bottom;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* Wobble Skew */
@-webkit-keyframes hvr-wobble-skew {
  16.65% {
    -webkit-transform: skew(-12deg);
    transform: skew(-12deg);
  }

  33.3% {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }

  49.95% {
    -webkit-transform: skew(-6deg);
    transform: skew(-6deg);
  }

  66.6% {
    -webkit-transform: skew(4deg);
    transform: skew(4deg);
  }

  83.25% {
    -webkit-transform: skew(-2deg);
    transform: skew(-2deg);
  }

  100% {
    -webkit-transform: skew(0);
    transform: skew(0);
  }
}

@keyframes hvr-wobble-skew {
  16.65% {
    -webkit-transform: skew(-12deg);
    transform: skew(-12deg);
  }

  33.3% {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }

  49.95% {
    -webkit-transform: skew(-6deg);
    transform: skew(-6deg);
  }

  66.6% {
    -webkit-transform: skew(4deg);
    transform: skew(4deg);
  }

  83.25% {
    -webkit-transform: skew(-2deg);
    transform: skew(-2deg);
  }

  100% {
    -webkit-transform: skew(0);
    transform: skew(0);
  }
}

.plus-hvr-wobble-skew {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-wobble-skew:hover,
.plus-hvr-wobble-skew:focus,
.plus-hvr-wobble-skew:active {
  -webkit-animation-name: hvr-wobble-skew;
  animation-name: hvr-wobble-skew;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* Buzz */
@-webkit-keyframes hvr-buzz {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }

  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}

@keyframes hvr-buzz {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }

  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}

.plus-hvr-buzz {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-buzz:hover,
.plus-hvr-buzz:focus,
.plus-hvr-buzz:active {
  -webkit-animation-name: hvr-buzz;
  animation-name: hvr-buzz;
  -webkit-animation-duration: 0.15s;
  animation-duration: 0.15s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

/* Buzz Out */
@-webkit-keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }

  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }

  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }

  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }

  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }

  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }

  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }

  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }

  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }

  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}

@keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }

  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }

  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }

  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }

  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }

  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }

  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }

  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }

  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }

  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}

.plus-hvr-buzz-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.plus-hvr-buzz-out:hover,
.plus-hvr-buzz-out:focus,
.plus-hvr-buzz-out:active {
  -webkit-animation-name: hvr-buzz-out;
  animation-name: hvr-buzz-out;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* BACKGROUND TRANSITIONS */
/* Fade */
.plus-hvr-fade {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;
}
.plus-hvr-fade:hover,
.plus-hvr-fade:focus,
.plus-hvr-fade:active {
  background-color: $primary;
  color: white;
}

/* Sweep To Right */
.plus-hvr-sweep-to-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-sweep-to-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-sweep-to-right:hover,
.plus-hvr-sweep-to-right:focus,
.plus-hvr-sweep-to-right:active {
  color: white;
}
.plus-hvr-sweep-to-right:hover:before,
.plus-hvr-sweep-to-right:focus:before,
.plus-hvr-sweep-to-right:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

/* Sweep To Left */
.plus-hvr-sweep-to-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-sweep-to-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-sweep-to-left:hover,
.plus-hvr-sweep-to-left:focus,
.plus-hvr-sweep-to-left:active {
  color: white;
}
.plus-hvr-sweep-to-left:hover:before,
.plus-hvr-sweep-to-left:focus:before,
.plus-hvr-sweep-to-left:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

/* Sweep To Bottom */
.plus-hvr-sweep-to-bottom {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-sweep-to-bottom:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-sweep-to-bottom:hover,
.plus-hvr-sweep-to-bottom:focus,
.plus-hvr-sweep-to-bottom:active {
  color: white;
}
.plus-hvr-sweep-to-bottom:hover:before,
.plus-hvr-sweep-to-bottom:focus:before,
.plus-hvr-sweep-to-bottom:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

/* Sweep To Top */
.plus-hvr-sweep-to-top {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-sweep-to-top:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-sweep-to-top:hover,
.plus-hvr-sweep-to-top:focus,
.plus-hvr-sweep-to-top:active {
  color: white;
}
.plus-hvr-sweep-to-top:hover:before,
.plus-hvr-sweep-to-top:focus:before,
.plus-hvr-sweep-to-top:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

/* Bounce To Right */
.plus-hvr-bounce-to-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.plus-hvr-bounce-to-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-bounce-to-right:hover,
.plus-hvr-bounce-to-right:focus,
.plus-hvr-bounce-to-right:active {
  color: white;
}
.plus-hvr-bounce-to-right:hover:before,
.plus-hvr-bounce-to-right:focus:before,
.plus-hvr-bounce-to-right:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

/* Bounce To Left */
.plus-hvr-bounce-to-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.plus-hvr-bounce-to-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-bounce-to-left:hover,
.plus-hvr-bounce-to-left:focus,
.plus-hvr-bounce-to-left:active {
  color: white;
}
.plus-hvr-bounce-to-left:hover:before,
.plus-hvr-bounce-to-left:focus:before,
.plus-hvr-bounce-to-left:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

/* Bounce To Bottom */
.plus-hvr-bounce-to-bottom {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.plus-hvr-bounce-to-bottom:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-bounce-to-bottom:hover,
.plus-hvr-bounce-to-bottom:focus,
.plus-hvr-bounce-to-bottom:active {
  color: white;
}
.plus-hvr-bounce-to-bottom:hover:before,
.plus-hvr-bounce-to-bottom:focus:before,
.plus-hvr-bounce-to-bottom:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

/* Bounce To Top */
.plus-hvr-bounce-to-top {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.plus-hvr-bounce-to-top:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-bounce-to-top:hover,
.plus-hvr-bounce-to-top:focus,
.plus-hvr-bounce-to-top:active {
  color: white;
}
.plus-hvr-bounce-to-top:hover:before,
.plus-hvr-bounce-to-top:focus:before,
.plus-hvr-bounce-to-top:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

/* Radial Out */
.plus-hvr-radial-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
  background: $none;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-radial-out:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  border-radius: 100%;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-radial-out:hover,
.plus-hvr-radial-out:focus,
.plus-hvr-radial-out:active {
  color: white;
}
.plus-hvr-radial-out:hover:before,
.plus-hvr-radial-out:focus:before,
.plus-hvr-radial-out:active:before {
  -webkit-transform: scale(2);
  transform: scale(2);
}

/* Radial In */
.plus-hvr-radial-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
  background: $primary;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-radial-in:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $none;
  border-radius: 100%;
  -webkit-transform: scale(2);
  transform: scale(2);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-radial-in:hover,
.plus-hvr-radial-in:focus,
.plus-hvr-radial-in:active {
  color: white;
}
.plus-hvr-radial-in:hover:before,
.plus-hvr-radial-in:focus:before,
.plus-hvr-radial-in:active:before {
  -webkit-transform: scale(0);
  transform: scale(0);
}

/* Rectangle In */
.plus-hvr-rectangle-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  background: $primary;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-rectangle-in:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $none;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-rectangle-in:hover,
.plus-hvr-rectangle-in:focus,
.plus-hvr-rectangle-in:active {
  color: white;
}
.plus-hvr-rectangle-in:hover:before,
.plus-hvr-rectangle-in:focus:before,
.plus-hvr-rectangle-in:active:before {
  -webkit-transform: scale(0);
  transform: scale(0);
}

/* Rectangle Out */
.plus-hvr-rectangle-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  background: $none;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-rectangle-out:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-rectangle-out:hover,
.plus-hvr-rectangle-out:focus,
.plus-hvr-rectangle-out:active {
  color: white;
}
.plus-hvr-rectangle-out:hover:before,
.plus-hvr-rectangle-out:focus:before,
.plus-hvr-rectangle-out:active:before {
  -webkit-transform: scale(1);
  transform: scale(1);
}

/* Shutter In Horizontal */
.plus-hvr-shutter-in-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  background: $primary;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-shutter-in-horizontal:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $none;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-shutter-in-horizontal:hover,
.plus-hvr-shutter-in-horizontal:focus,
.plus-hvr-shutter-in-horizontal:active {
  color: white;
}
.plus-hvr-shutter-in-horizontal:hover:before,
.plus-hvr-shutter-in-horizontal:focus:before,
.plus-hvr-shutter-in-horizontal:active:before {
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
}

/* Shutter Out Horizontal */
.plus-hvr-shutter-out-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  background: $none;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-shutter-out-horizontal:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $primary;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-shutter-out-horizontal:hover,
.plus-hvr-shutter-out-horizontal:focus,
.plus-hvr-shutter-out-horizontal:active {
  color: white;
}
.plus-hvr-shutter-out-horizontal:hover:before,
.plus-hvr-shutter-out-horizontal:focus:before,
.plus-hvr-shutter-out-horizontal:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

/* Shutter In Vertical */
.plus-hvr-shutter-in-vertical {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  background: $primary;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-shutter-in-vertical:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $none;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-shutter-in-vertical:hover,
.plus-hvr-shutter-in-vertical:focus,
.plus-hvr-shutter-in-vertical:active {
  color: white;
}
.plus-hvr-shutter-in-vertical:hover:before,
.plus-hvr-shutter-in-vertical:focus:before,
.plus-hvr-shutter-in-vertical:active:before {
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
}

/* Shutter Out Vertical */
.plus-hvr-shutter-out-vertical {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  background: $none;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.plus-hvr-shutter-out-vertical:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $primary;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-shutter-out-vertical:hover,
.plus-hvr-shutter-out-vertical:focus,
.plus-hvr-shutter-out-vertical:active {
  color: white;
}
.plus-hvr-shutter-out-vertical:hover:before,
.plus-hvr-shutter-out-vertical:focus:before,
.plus-hvr-shutter-out-vertical:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

/* BORDER TRANSITIONS */
/* Border Fade */
.plus-hvr-border-fade {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
  box-shadow: inset 0 0 0 4px $none, 0 0 1px rgba(0, 0, 0, 0);
  /* Hack to improve aliasing on mobile/tablet devices */
}
.plus-hvr-border-fade:hover,
.plus-hvr-border-fade:focus,
.plus-hvr-border-fade:active {
  box-shadow: inset 0 0 0 4px $primary, 0 0 1px rgba(0, 0, 0, 0);
  /* Hack to improve aliasing on mobile/tablet devices */
}

/* Hollow */
.plus-hvr-hollow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: background;
  transition-property: background;
  box-shadow: inset 0 0 0 4px $none, 0 0 1px rgba(0, 0, 0, 0);
  /* Hack to improve aliasing on mobile/tablet devices */
}
.plus-hvr-hollow:hover,
.plus-hvr-hollow:focus,
.plus-hvr-hollow:active {
  background: none;
}

/* Trim */
.plus-hvr-trim {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.plus-hvr-trim:before {
  content: "";
  position: absolute;
  border: white solid 4px;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  opacity: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: opacity;
  transition-property: opacity;
}
.plus-hvr-trim:hover:before,
.plus-hvr-trim:focus:before,
.plus-hvr-trim:active:before {
  opacity: 1;
}

/* Ripple Out */
@-webkit-keyframes hvr-ripple-out {
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
}

@keyframes hvr-ripple-out {
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
}

.plus-hvr-ripple-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.plus-hvr-ripple-out:before {
  content: "";
  position: absolute;
  border: $none solid 6px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}
.plus-hvr-ripple-out:hover:before,
.plus-hvr-ripple-out:focus:before,
.plus-hvr-ripple-out:active:before {
  -webkit-animation-name: hvr-ripple-out;
  animation-name: hvr-ripple-out;
}

/* Ripple In */
@-webkit-keyframes hvr-ripple-in {
  100% {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
  }
}

@keyframes hvr-ripple-in {
  100% {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
  }
}

.plus-hvr-ripple-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.plus-hvr-ripple-in:before {
  content: "";
  position: absolute;
  border: $none solid 4px;
  top: -12px;
  right: -12px;
  bottom: -12px;
  left: -12px;
  opacity: 0;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}
.plus-hvr-ripple-in:hover:before,
.plus-hvr-ripple-in:focus:before,
.plus-hvr-ripple-in:active:before {
  -webkit-animation-name: hvr-ripple-in;
  animation-name: hvr-ripple-in;
}

/* Outline Out */
.plus-hvr-outline-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.plus-hvr-outline-out:before {
  content: "";
  position: absolute;
  border: $none solid 4px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: top, right, bottom, left;
  transition-property: top, right, bottom, left;
}
.plus-hvr-outline-out:hover:before,
.plus-hvr-outline-out:focus:before,
.plus-hvr-outline-out:active:before {
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -8px;
}

/* Outline In */
.plus-hvr-outline-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.plus-hvr-outline-in:before {
  pointer-events: none;
  content: "";
  position: absolute;
  border: $none solid 4px;
  top: -16px;
  right: -16px;
  bottom: -16px;
  left: -16px;
  opacity: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: top, right, bottom, left;
  transition-property: top, right, bottom, left;
}
.plus-hvr-outline-in:hover:before,
.plus-hvr-outline-in:focus:before,
.plus-hvr-outline-in:active:before {
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -8px;
  opacity: 1;
}

/* Round Corners */
.plus-hvr-round-corners {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: border-radius;
  transition-property: border-radius;
}
.plus-hvr-round-corners:hover,
.plus-hvr-round-corners:focus,
.plus-hvr-round-corners:active {
  border-radius: 1em;
}

/* Underline From Left */
.plus-hvr-underline-from-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
.plus-hvr-underline-from-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: $primary;
  height: 4px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-underline-from-left:hover:before,
.plus-hvr-underline-from-left:focus:before,
.plus-hvr-underline-from-left:active:before {
  right: 0;
}

/* Underline From Center */
.plus-hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
.plus-hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 50%;
  right: 50%;
  bottom: 0;
  background: $primary;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-underline-from-center:hover:before,
.plus-hvr-underline-from-center:focus:before,
.plus-hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}

/* Underline From Right */
.plus-hvr-underline-from-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
.plus-hvr-underline-from-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 100%;
  right: 0;
  bottom: 0;
  background: $primary;
  height: 4px;
  -webkit-transition-property: left;
  transition-property: left;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-underline-from-right:hover:before,
.plus-hvr-underline-from-right:focus:before,
.plus-hvr-underline-from-right:active:before {
  left: 0;
}

/* Overline From Left */
.plus-hvr-overline-from-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
.plus-hvr-overline-from-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  top: 0;
  background: $primary;
  height: 4px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-overline-from-left:hover:before,
.plus-hvr-overline-from-left:focus:before,
.plus-hvr-overline-from-left:active:before {
  right: 0;
}

/* Overline From Center */
.plus-hvr-overline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
.plus-hvr-overline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 50%;
  right: 50%;
  top: 0;
  background: $primary;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-overline-from-center:hover:before,
.plus-hvr-overline-from-center:focus:before,
.plus-hvr-overline-from-center:active:before {
  left: 0;
  right: 0;
}

/* Overline From Right */
.plus-hvr-overline-from-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
.plus-hvr-overline-from-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 100%;
  right: 0;
  top: 0;
  background: $primary;
  height: 4px;
  -webkit-transition-property: left;
  transition-property: left;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-overline-from-right:hover:before,
.plus-hvr-overline-from-right:focus:before,
.plus-hvr-overline-from-right:active:before {
  left: 0;
}

/* Reveal */
.plus-hvr-reveal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
.plus-hvr-reveal:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-color: $primary;
  border-style: solid;
  border-width: 0;
  -webkit-transition-property: border-width;
  transition-property: border-width;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-reveal:hover:before,
.plus-hvr-reveal:focus:before,
.plus-hvr-reveal:active:before {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  border-width: 4px;
}

/* Underline Reveal */
.plus-hvr-underline-reveal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
.plus-hvr-underline-reveal:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary;
  height: 4px;
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-underline-reveal:hover:before,
.plus-hvr-underline-reveal:focus:before,
.plus-hvr-underline-reveal:active:before {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

/* Overline Reveal */
.plus-hvr-overline-reveal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
.plus-hvr-overline-reveal:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  background: $primary;
  height: 4px;
  -webkit-transform: translateY(-4px);
  transform: translateY(-4px);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.plus-hvr-overline-reveal:hover:before,
.plus-hvr-overline-reveal:focus:before,
.plus-hvr-overline-reveal:active:before {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

/* SHADOW/GLOW TRANSITIONS */
/* Glow */
.plus-hvr-glow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
}
.plus-hvr-glow:hover,
.plus-hvr-glow:focus,
.plus-hvr-glow:active {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}

/* Shadow */
.plus-hvr-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
}
.plus-hvr-shadow:hover,
.plus-hvr-shadow:focus,
.plus-hvr-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
}

/* Grow Shadow */
.plus-hvr-grow-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.plus-hvr-grow-shadow:hover,
.plus-hvr-grow-shadow:focus,
.plus-hvr-grow-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* Box Shadow Outset */
.plus-hvr-box-shadow-outset {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
}
.plus-hvr-box-shadow-outset:hover,
.plus-hvr-box-shadow-outset:focus,
.plus-hvr-box-shadow-outset:active {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
}

/* Box Shadow Inset */
.plus-hvr-box-shadow-inset {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);
  /* Hack to improve aliasing on mobile/tablet devices */
}
.plus-hvr-box-shadow-inset:hover,
.plus-hvr-box-shadow-inset:focus,
.plus-hvr-box-shadow-inset:active {
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);
  /* Hack to improve aliasing on mobile/tablet devices */
}

/* Float Shadow */
.plus-hvr-float-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.plus-hvr-float-shadow:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: "";
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(
    center,
    ellipse,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  /* W3C */
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform, opacity;
  transition-property: transform, opacity;
}
.plus-hvr-float-shadow:hover,
.plus-hvr-float-shadow:focus,
.plus-hvr-float-shadow:active {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  /* move the element up by 5px */
}
.plus-hvr-float-shadow:hover:before,
.plus-hvr-float-shadow:focus:before,
.plus-hvr-float-shadow:active:before {
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}

/* Shadow Radial */
.plus-hvr-shadow-radial {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.plus-hvr-shadow-radial:before,
.plus-hvr-shadow-radial:after {
  pointer-events: none;
  position: absolute;
  content: "";
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-repeat: no-repeat;
  height: 5px;
  opacity: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: opacity;
  transition-property: opacity;
}
.plus-hvr-shadow-radial:before {
  bottom: 100%;
  background: -webkit-radial-gradient(
    50% 150%,
    ellipse,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  background: radial-gradient(
    ellipse at 50% 150%,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 80%
  );
}
.plus-hvr-shadow-radial:after {
  top: 100%;
  background: -webkit-radial-gradient(
    50% -50%,
    ellipse,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  background: radial-gradient(
    ellipse at 50% -50%,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 80%
  );
}
.plus-hvr-shadow-radial:hover:before,
.plus-hvr-shadow-radial:focus:before,
.plus-hvr-shadow-radial:active:before,
.plus-hvr-shadow-radial:hover:after,
.plus-hvr-shadow-radial:focus:after,
.plus-hvr-shadow-radial:active:after {
  opacity: 1;
}

/* CURLS */
/* Curl Top Left */
.plus-hvr-curl-top-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.plus-hvr-curl-top-left:before {
  pointer-events: none;
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  top: 0;
  left: 0;
  background: white;
  /* IE9 */
  background: linear-gradient(
    135deg,
    white 45%,
    #aaaaaa 50%,
    #cccccc 56%,
    white 80%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');
  /*For IE7-8-9*/
  z-index: 1000;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: width, height;
  transition-property: width, height;
}
.plus-hvr-curl-top-left:hover:before,
.plus-hvr-curl-top-left:focus:before,
.plus-hvr-curl-top-left:active:before {
  width: 25px;
  height: 25px;
}

/* Curl Top Right */
.plus-hvr-curl-top-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.plus-hvr-curl-top-right:before {
  pointer-events: none;
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  top: 0;
  right: 0;
  background: white;
  /* IE9 */
  background: linear-gradient(
    225deg,
    white 45%,
    #aaaaaa 50%,
    #cccccc 56%,
    white 80%
  );
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: width, height;
  transition-property: width, height;
}
.plus-hvr-curl-top-right:hover:before,
.plus-hvr-curl-top-right:focus:before,
.plus-hvr-curl-top-right:active:before {
  width: 25px;
  height: 25px;
}

/* Curl Bottom Right */
.plus-hvr-curl-bottom-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.plus-hvr-curl-bottom-right:before {
  pointer-events: none;
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  bottom: 0;
  right: 0;
  background: white;
  /* IE9 */
  background: linear-gradient(
    315deg,
    white 45%,
    #aaaaaa 50%,
    #cccccc 56%,
    white 80%
  );
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.4);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: width, height;
  transition-property: width, height;
}
.plus-hvr-curl-bottom-right:hover:before,
.plus-hvr-curl-bottom-right:focus:before,
.plus-hvr-curl-bottom-right:active:before {
  width: 25px;
  height: 25px;
}

/* Curl Bottom Left */
.plus-hvr-curl-bottom-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.plus-hvr-curl-bottom-left:before {
  pointer-events: none;
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  bottom: 0;
  left: 0;
  background: white;
  /* IE9 */
  background: linear-gradient(
    45deg,
    white 45%,
    #aaaaaa 50%,
    #cccccc 56%,
    white 80%
  );
  box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.4);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: width, height;
  transition-property: width, height;
}
.plus-hvr-curl-bottom-left:hover:before,
.plus-hvr-curl-bottom-left:focus:before,
.plus-hvr-curl-bottom-left:active:before {
  width: 25px;
  height: 25px;
}
</style>
