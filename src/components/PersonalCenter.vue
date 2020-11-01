<template>
    <el-row :gutter="30" type="flex" justify="center">
      <el-col :xs="20" :sm="15" :md="13" :lg="11" :xl="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <i class="el-icon-user-solid" style="font-size:50px;font-weight:500px;color:"/>
          </div>
          <span class="LoginFont">登录</span><br/><br/>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button type=""><router-link to="/Register">注册</router-link></el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'PersonalCenter',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        name: ''
      },
      rules: {
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 10, message: '用户名长度在1到10之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.$store.commit('changeUserId', {UserId: 'ck'})
          this.$store.commit('changePersonalCenterDispatcher', {where: '/PersonalHome/ck'})
          this.$router.push({name: 'PersonalHome', params: {id: 'ck'}})
        } else {
          this.$message.error('登录失败')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
  width: 100%;
}
.LoginFont{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-weight: 800;
  font-size: 18px;
  color:#545c64;
}
a{
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
