<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: #545c64">
            <el-menu :default-active="index1_1" :default-openeds="['1']" class="el-menu-vertical-demo"
            @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b" :router="true">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>探索</span>
                    </template>
                    <el-menu-item :index="index1_1">
                        <span slot="title">在这里可以发现什么</span>
                    </el-menu-item>
                    <el-menu-item :index="index1_2">
                        <span slot="title">推荐演员</span>
                    </el-menu-item>
                    <el-menu-item :index="index1_3">
                       <span slot="title">推荐电影</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item :index="index4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">管理账号</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 20px">
              <el-dropdown>
                  <i class="el-icon-setting" style="margin-right: 15px"></i>
                  <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><span @click="manageProfile">管理账号</span></el-dropdown-item>
                  <el-dropdown-item>消息</el-dropdown-item>
                  <el-dropdown-item><span @click="logout">退出登录</span></el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
              <span>{{UserId}}</span>
            </el-header>
            <el-main>
                <router-view/>
           </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'PersonalHome',
  data () {
    return {
      userId: this.$store.state.UserId,
      index1_1: '/PersonalHome/' + this.UserId,
      index1_2: '/PersonalHome/' + this.UserId + '/RecommandActor',
      index1_3: '/PersonalHome/' + this.UserId + '/RecommandMovie',
      index2: '',
      index3: '',
      index4: '/PersonalHome/' + this.UserId + '/settings',
      open_list: ['1']
    }
  },
  computed: {
    UserId: function () {
      return this.$store.state.UserId
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      this.$store.commit('changePersonalCenterDispatcher', {where: '/PersonalCenter'})
      this.$store.commit('changeUserId', {UserId: ''})
      this.$router.push({name: 'PersonalCenter'})
    },
    manageProfile () {
      this.$router.push({name: 'PersonalHomeSettings', params: {id: this.userId}})
    }
  }
}
</script>
