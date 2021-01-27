<template>
  <div class="btns">
    <h1>size:</h1>
    <plus-btn class="btn-mg" :type="'primary'" :size="'giant'">giant</plus-btn>
    <plus-btn class="btn-mg" :type="'primary'" :size="'jumbo'">jumbo</plus-btn>
    <plus-btn class="btn-mg" :type="'primary'" :size="'large'">large</plus-btn>
    <plus-btn class="btn-mg" :type="'primary'" :size="'normal'">normal</plus-btn>
    <plus-btn class="btn-mg" :type="'primary'" :size="'small'">small</plus-btn>
    <plus-btn class="btn-mg" :type="'primary'" :size="'small'">tiny</plus-btn>

    <h1>type:</h1>
    <plus-btn class="btn-mg" >none</plus-btn>
    <plus-btn class="btn-mg" :type="'primary'">primary</plus-btn>
    <plus-btn class="btn-mg" :type="'success'">success</plus-btn>
    <plus-btn class="btn-mg" :type="'info'">info</plus-btn>
    <plus-btn class="btn-mg" :type="'warning'">warning</plus-btn>
    <plus-btn class="btn-mg" :type="'danger'">danger</plus-btn>

    <h1>shape:</h1>
    <plus-btn class="btn-mg" :sharpe="'square'">primary</plus-btn>
    <plus-btn class="btn-mg" :sharpe="'rounded'">rounded</plus-btn>
    <plus-btn class="btn-mg" :sharpe="'box'">box</plus-btn>
    <plus-btn class="btn-mg" :sharpe="'pill'">pill</plus-btn>
    <plus-btn class="btn-mg" :sharpe="'circle'">circle</plus-btn>
   
    <h1>fontSize:</h1>
    <plus-btn class="btn-mg" :fontSize="'20px'">fontSize</plus-btn>
   
    <h1>bgColor:</h1>
    <plus-btn class="btn-mg" :bgColor="'#f60'">bgColor</plus-btn>
   
    <h1>basis:</h1>
    <plus-btn class="btn-mg" :basis="'100px'" :fontSize="'34px'">bgColor</plus-btn>
   

    <h1>disabled:</h1>
    <plus-btn class="btn-mg" :isdisabled="true" disabled>primary</plus-btn>

    <h1>2D Transitions</h1>

    <plus-btn class="btn-mg" :hover="'grow'">Grow</plus-btn>

    <plus-btn class="btn-mg" :hover="'shrink'">Shrink</plus-btn>

    <plus-btn class="btn-mg" :hover="'pulse'">Pulse</plus-btn>

    <plus-btn class="btn-mg" :hover="'pulse-grow'">Pulse Grow</plus-btn>

    <plus-btn class="btn-mg" :hover="'pulse-shrink'">Pulse Shrink</plus-btn>

    <plus-btn class="btn-mg" :hover="'push'">Push</plus-btn>

    <plus-btn class="btn-mg" :hover="'pop'">Pop</plus-btn>

    <plus-btn class="btn-mg" :hover="'bounce-in'">Bounce In</plus-btn>

    <plus-btn class="btn-mg" :hover="'bounce-out'">Bounce Out</plus-btn>

    <plus-btn class="btn-mg" :hover="'rotate'">Rotate</plus-btn>

    <plus-btn class="btn-mg" :hover="'grow-rotate'">Grow Rotate</plus-btn>

    <plus-btn class="btn-mg" :hover="'float'">Float</plus-btn>

    <plus-btn class="btn-mg" :hover="'sink'">Sink</plus-btn>

    <plus-btn class="btn-mg" :hover="'bob'">Bob</plus-btn>

    <plus-btn class="btn-mg" :hover="'hang'">Hang</plus-btn>

    <plus-btn class="btn-mg" :hover="'skew'">Skew</plus-btn>

    <plus-btn class="btn-mg" :hover="'skew-forward'">Skew Forward</plus-btn>

    <plus-btn class="btn-mg" :hover="'skew-backward'">Skew Backward</plus-btn>

    <plus-btn class="btn-mg" :hover="'wobble-horizontal'">Wobble Horizontal</plus-btn>

    <plus-btn class="btn-mg" :hover="'wobble-vertical'">Wobble Vertical</plus-btn>

    <plus-btn class="btn-mg" :hover="'wobble-to-bottom-right'"
      >Wobble To Bottom Right</plus-btn
    >

    <plus-btn class="btn-mg" :hover="'wobble-to-top-right'"
      >Wobble To Top Right</plus-btn
    >

    <plus-btn class="btn-mg" :hover="'wobble-top'">Wobble Top</plus-btn>

    <plus-btn class="btn-mg" :hover="'wobble-bottom'">Wobble Bottom</plus-btn>

    <plus-btn class="btn-mg" :hover="'wobble-skew'">Wobble Skew</plus-btn>

    <plus-btn class="btn-mg" :hover="'buzz'">Buzz</plus-btn>

    <plus-btn class="btn-mg" :hover="'buzz-out'">Buzz Out</plus-btn>

    <h1>Background Transitions</h1>

    <plus-btn class="btn-mg" :hover="'fade'">Fade</plus-btn>

    <plus-btn class="btn-mg" :hover="'sweep-to-right'">Sweep To Right</plus-btn>

    <plus-btn class="btn-mg" :hover="'sweep-to-left'">Sweep To Left</plus-btn>

    <plus-btn class="btn-mg" :hover="'sweep-to-bottom'">Sweep To Bottom</plus-btn>

    <plus-btn class="btn-mg" :hover="'sweep-to-top'">Sweep To Top</plus-btn>

    <plus-btn class="btn-mg" :hover="'bounce-to-right'">Bounce To Right</plus-btn>

    <plus-btn class="btn-mg" :hover="'bounce-to-left'">Bounce To Left</plus-btn>

    <plus-btn class="btn-mg" :hover="'bounce-to-bottom'">Bounce To Bottom</plus-btn>

    <plus-btn class="btn-mg" :hover="'bounce-to-top'">Bounce To Top</plus-btn>

    <plus-btn class="btn-mg" :hover="'radial-out'">Radial Out</plus-btn>

    <plus-btn class="btn-mg" :hover="'radial-in'">Radial In</plus-btn>

    <plus-btn class="btn-mg" :hover="'rectangle-in'">Rectangle In</plus-btn>

    <plus-btn class="btn-mg" :hover="'rectangle-out'">Rectangle Out</plus-btn>

    <plus-btn class="btn-mg" :hover="'shutter-in-horizontal'"
      >Shutter In Horizontal</plus-btn
    >

    <plus-btn class="btn-mg" :hover="'shutter-out-horizontal'"
      >Shutter Out Horizontal</plus-btn
    >

    <plus-btn class="btn-mg" :hover="'shutter-in-vertical'"
      >Shutter In Vertical</plus-btn
    >

    <plus-btn class="btn-mg" :hover="'shutter-out-vertical'"
      >Shutter Out Vertical</plus-btn
    >

    <h1>Border Transitions</h1>

    <plus-btn class="btn-mg" :hover="'border-fade'">Border Fade</plus-btn>

    <plus-btn class="btn-mg" :hover="'hollow'">Hollow</plus-btn>

    <plus-btn class="btn-mg" :hover="'trim'">Trim</plus-btn>

    <plus-btn class="btn-mg" :hover="'ripple-out'">Ripple Out</plus-btn>

    <plus-btn class="btn-mg" :hover="'ripple-in'">Ripple In</plus-btn>

    <plus-btn class="btn-mg" :hover="'outline-out'">Outline Out</plus-btn>

    <plus-btn class="btn-mg" :hover="'outline-in'">Outline In</plus-btn>

    <plus-btn class="btn-mg" :hover="'round-corners'">Round Corners</plus-btn>

    <plus-btn class="btn-mg" :hover="'underline-from-left'"
      >Underline From Left</plus-btn
    >

    <plus-btn class="btn-mg" :hover="'underline-from-center'"
      >Underline From Center</plus-btn
    >

    <plus-btn class="btn-mg" :hover="'underline-from-right'"
      >Underline From Right</plus-btn
    >

    <plus-btn class="btn-mg" :hover="'reveal'">Reveal</plus-btn>

    <plus-btn class="btn-mg" :hover="'underline-reveal'">Underline Reveal</plus-btn>

    <plus-btn class="btn-mg" :hover="'overline-reveal'">Overline Reveal</plus-btn>

    <plus-btn class="btn-mg" :hover="'overline-from-left'">Overline From Left</plus-btn>

    <plus-btn class="btn-mg" :hover="'overline-from-center'"
      >Overline From Center</plus-btn
    >

    <plus-btn class="btn-mg" :hover="'overline-from-right'"
      >Overline From Right</plus-btn
    >

    <h1>Shadow and Glow Transitions</h1>

    <plus-btn class="btn-mg" :hover="'shadow'">Shadow</plus-btn>

    <plus-btn class="btn-mg" :hover="'grow-shadow'">Grow Shadow</plus-btn>

    <plus-btn class="btn-mg" :hover="'float-shadow'">Float Shadow</plus-btn>

    <plus-btn class="btn-mg" :hover="'glow'">Glow</plus-btn>

    <plus-btn class="btn-mg" :hover="'shadow-radial'">Shadow Radial</plus-btn>

    <plus-btn class="btn-mg" :hover="'box-shadow-outset'">Box Shadow Outset</plus-btn>

    <plus-btn class="btn-mg" :hover="'box-shadow-inset'">Box Shadow Inset</plus-btn>

    <h1>Curls</h1>

    <plus-btn class="btn-mg" :hover="'curl-top-left'">Curl Top Left</plus-btn>

    <plus-btn class="btn-mg" :hover="'curl-top-right'">Curl Top Right</plus-btn>

    <plus-btn class="btn-mg" :hover="'curl-bottom-right'">Curl Bottom Right</plus-btn>

    <plus-btn class="btn-mg" :hover="'curl-bottom-left'">Curl Bottom Left</plus-btn>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btns {
  .btn-mg {
    margin: 10px;
  }
}
</style>