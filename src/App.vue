<template>
  <div class="container">
    <div id="app">
      <el-container>
          <el-header>
              <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
              text-color="#fff" active-text-color="#ffd04b" :router="true">
                  <el-menu-item index="/">首页</el-menu-item>
                  <el-menu-item :index="PersonalCenterDispatcher">个人中心</el-menu-item>
                  <el-menu-item index="3" >还没有想好</el-menu-item>
                  <el-menu-item index="4">还没有想好</el-menu-item>
              </el-menu>
          </el-header>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer height="250px">
            <i class="el-icon-s-promotion"></i>
            Copyright © 2020-2025 ZJUT
          </el-footer>
      </el-container>
    </div>
    <el-backtop target=".container" visibility-height="50" bottom="300" right="25">
        <span>UP</span>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex2: '/'
    }
  },
  computed: {
    PersonalCenterDispatcher: function () {
      return this.$store.state.PersonalCenterDispatcher
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
.el-footer {
  background-color: #545c64;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.container{
  width:100%;
  height:100vh;
  overflow-x:hidden;
}
.toTop{
  padding: 10px;
  box-shadow: 0px 0px 5px black;
}
</style>
