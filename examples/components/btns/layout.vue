<template>
  <div class="layout">
    <h1>栅格布局</h1>
    <plus-container>
      <plus-row class="row">
        <plus-col :span="24" class="cont">span=24</plus-col>
      </plus-row>
      <plus-row class="row">
        <plus-col :span="12" class="cont"> span=12</plus-col>
        <plus-col :span="12" class="cont">span=12</plus-col>
      </plus-row>
      <plus-row class="row">
        <plus-col :span="8" class="cont">span=8</plus-col>
        <plus-col :span="8" class="cont">span=8</plus-col>
        <plus-col :span="8" class="cont">span=8</plus-col>
      </plus-row>
      <plus-row class="row">
        <plus-col :span="6" class="cont">span=6</plus-col>
        <plus-col :span="6" class="cont">span=6</plus-col>
        <plus-col :span="6" class="cont">span=6</plus-col>
        <plus-col :span="6" class="cont">span=6</plus-col>
      </plus-row>
      <plus-row class="row">
        <plus-col :span="4" class="cont">span=4</plus-col>
        <plus-col :span="4" class="cont">span=4</plus-col>
        <plus-col :span="4" class="cont">span=4</plus-col>
        <plus-col :span="4" class="cont">span=4</plus-col>
        <plus-col :span="4" class="cont">span=4</plus-col>
        <plus-col :span="4" class="cont">span=4</plus-col>
      </plus-row>
      <plus-row class="row">
        <plus-col :span="3" class="cont">span=3</plus-col>
        <plus-col :span="3" class="cont">span=3</plus-col>
        <plus-col :span="3" class="cont">span=3</plus-col>
        <plus-col :span="3" class="cont">span=3</plus-col>
        <plus-col :span="3" class="cont">span=3</plus-col>
        <plus-col :span="3" class="cont">span=3</plus-col>
        <plus-col :span="3" class="cont">span=3</plus-col>
        <plus-col :span="3" class="cont">span=3</plus-col>
      </plus-row>
    </plus-container>

    <h1>flex布局</h1>

    <h2>plus-flex 的属性：</h2>
    <h3>:direction="row"</h3>
    <plus-flex class="row" :direction="'row'">
      <plus-item class="cont" :grow="1">1</plus-item>
      <plus-item class="cont" :grow="1">2</plus-item>
      <plus-item class="cont" :grow="1">3</plus-item>
    </plus-flex>
    <h3>:direction="row-reverse"</h3>
    <plus-flex class="row" :direction="'row-reverse'">
      <plus-item class="cont" :grow="1">1</plus-item>
      <plus-item class="cont" :grow="1">2</plus-item>
      <plus-item class="cont" :grow="1">3</plus-item>
    </plus-flex>
    <h3>:direction="column"</h3>
    <plus-flex class="row" :direction="'column'">
      <plus-item class="cont cont-column" >1</plus-item>
      <plus-item class="cont cont-column" >2</plus-item>
      <plus-item class="cont cont-column" >3</plus-item>
    </plus-flex>
    <h3>:direction="column-reverse"</h3>
    <plus-flex class="row" :direction="'column-reverse'">
      <plus-item class="cont cont-column" >1</plus-item>
      <plus-item class="cont cont-column" >2</plus-item>
      <plus-item class="cont cont-column" >3</plus-item>
    </plus-flex>
    <h3>:wrap="wrap"</h3>
    <plus-flex class="row" :wrap="'wrap'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:wrap="nowrap"</h3>
    <plus-flex class="row" :wrap="'nowrap'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:wrap="wrap-reverse"</h3>
    <plus-flex class="row" :wrap="'wrap-reverse'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:wrap="wrap-reverse"</h3>
    <plus-flex class="row" :wrap="'wrap-reverse'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:justify="flex-start"</h3>
    <plus-flex class="row" :justify="'flex-start'">
      <plus-item class="cont" :basis="'100px'">1</plus-item>
      <plus-item class="cont" :basis="'100px'">2</plus-item>
      <plus-item class="cont" :basis="'100px'">3</plus-item>
      <plus-item class="cont" :basis="'100px'">4</plus-item>
      <plus-item class="cont" :basis="'100px'">5</plus-item>
    </plus-flex>
    <h3>:justify="flex-end"</h3>
    <plus-flex class="row" :justify="'flex-end'">
      <plus-item class="cont" :basis="'100px'">1</plus-item>
      <plus-item class="cont" :basis="'100px'">2</plus-item>
      <plus-item class="cont" :basis="'100px'">3</plus-item>
      <plus-item class="cont" :basis="'100px'">4</plus-item>
      <plus-item class="cont" :basis="'100px'">5</plus-item>
    </plus-flex>
    <h3>:justify="center"</h3>
    <plus-flex class="row" :justify="'center'">
      <plus-item class="cont" :basis="'100px'">1</plus-item>
      <plus-item class="cont" :basis="'100px'">2</plus-item>
      <plus-item class="cont" :basis="'100px'">3</plus-item>
      <plus-item class="cont" :basis="'100px'">4</plus-item>
      <plus-item class="cont" :basis="'100px'">5</plus-item>
    </plus-flex>
    <h3>:justify="space-between"</h3>
    <plus-flex class="row" :justify="'space-between'">
      <plus-item class="cont" :basis="'100px'">1</plus-item>
      <plus-item class="cont" :basis="'100px'">2</plus-item>
      <plus-item class="cont" :basis="'100px'">3</plus-item>
      <plus-item class="cont" :basis="'100px'">4</plus-item>
      <plus-item class="cont" :basis="'100px'">5</plus-item>
    </plus-flex>
    <h3>:justify="space-around"</h3>
    <plus-flex class="row" :justify="'space-around'">
      <plus-item class="cont" :basis="'100px'">1</plus-item>
      <plus-item class="cont" :basis="'100px'">2</plus-item>
      <plus-item class="cont" :basis="'100px'">3</plus-item>
      <plus-item class="cont" :basis="'100px'">4</plus-item>
      <plus-item class="cont" :basis="'100px'">5</plus-item>
    </plus-flex>
    <h3>:alignItems="flex-start"</h3>
    <plus-flex class="row row-align" :alignItems="'flex-start'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:alignItems="flex-end"</h3>
    <plus-flex class="row row-align" :alignItems="'flex-end'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:alignItems="center"</h3>
    <plus-flex class="row row-align" :alignItems="'center'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:alignItems="baseline"</h3>
    <plus-flex class="row row-align" :alignItems="'baseline'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:alignItems="stretch"</h3>
    <plus-flex class="row row-align" :alignItems="'stretch'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:alignContent="flex-start "</h3>
    <plus-flex class="row row-align" :alignContent="'flex-start'" :wrap="'wrap'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:alignContent="flex-end "</h3>
    <plus-flex class="row row-align" :alignContent="'flex-end'" :wrap="'wrap'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:alignContent="space-between"</h3>
    <plus-flex
      class="row row-align"
      :alignContent="'space-between'"
      :wrap="'wrap'"
    >
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:alignContent="space-around"</h3>
    <plus-flex
      class="row row-align"
      :alignContent="'space-around'"
      :wrap="'wrap'"
    >
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>
    <h3>:alignContent="stretch"</h3>
    <plus-flex class="row row-align" :alignContent="'stretch'" :wrap="'wrap'">
      <plus-item class="cont" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :basis="'400px'">3</plus-item>
      <plus-item class="cont" :basis="'400px'">4</plus-item>
      <plus-item class="cont" :basis="'400px'">5</plus-item>
    </plus-flex>


    <h2>plus-item 的属性：</h2>
    <h3>:order="Number"</h3>
    <plus-flex class="row" >
      <plus-item class="cont" :order="3" :grow="1">1</plus-item>
      <plus-item class="cont" :order="2" :grow="1">2</plus-item>
      <plus-item class="cont" :order="1" :grow="1">3</plus-item>
    </plus-flex>
    <h3>:grow="Number"</h3>
    <plus-flex class="row" >
      <plus-item class="cont" :grow="1">1</plus-item>
      <plus-item class="cont" :grow="1">2</plus-item>
      <plus-item class="cont" :grow="1">3</plus-item>
    </plus-flex>
    <h3>:shrink="Number"</h3>
    <plus-flex class="row" >
      <plus-item class="cont" :shrink="1" :basis="'400px'">1</plus-item>
      <plus-item class="cont" :shrink="2" :basis="'400px'">2</plus-item>
      <plus-item class="cont" :shrink="3" :basis="'400px'">3</plus-item>
    </plus-flex>
     <h3>:basis="String"</h3>
    <plus-flex class="row" >
      <plus-item class="cont" :shrink="1" :basis="'100px'">1</plus-item>
      <plus-item class="cont" :shrink="2" :basis="'200px'">2</plus-item>
      <plus-item class="cont" :shrink="3" :basis="'300px'">3</plus-item>
    </plus-flex>
     <h3>:alignSelf="auto"</h3>
    <plus-flex class="row" :alignItems="'flex-start'">
      <plus-item class="cont" :alignSelf="'flex-end'" :basis="'100px'">1</plus-item>
      <plus-item class="cont" :alignSelf="'center'" :basis="'200px'">2</plus-item>
      <plus-item class="cont" :basis="'300px'">3</plus-item>
    </plus-flex>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  margin: 10px auto;
  .cont {
    color: #fff;
    height: 40px;
    line-height: 40px;
  }
  .cont-column{
      width: 400px;
  }
  .cont:nth-child(odd) {
    background: #09aeaf;
  }
  .cont:nth-child(even) {
    background: #5cb85c;
  }
}
.row-align {
  background: #eee;
  height: 200px;
}
h3 {
  background: #fff;
  text-align: left;
  padding-left: 50px;
}
</style>