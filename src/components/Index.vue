<template>
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="(item, index) in ShowInfo" :key="index">
      <img :src="item.img" alt="img"/>
    </el-carousel-item>
  </el-carousel>
</template>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
<script>
export default {
  name: 'Index',
  data () {
    return {
      ShowInfo: [
        {
          img: require('../assets/logo.png'),
          idx: 1
        },
        {
          img: require('../assets/logo.png'),
          idx: 2
        },
        {
          img: require('../assets/logo.png'),
          idx: 3
        }]
    }
  }
}
</script>
