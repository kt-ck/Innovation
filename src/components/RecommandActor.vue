<template>
    <div>
        <el-steps :active="active" finish-status="success" align-center>
            <el-step title="步骤 1" icon="el-icon-edit" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
        <div>这里是表单</div>
        <div class="bottom">
            <el-tooltip class="item" effect="dark" content="返回上一步" placement="bottom-start">
                <el-button @click="pre">上一步</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="返回下一步" placement="bottom-end">
                <el-button @click="next">下一步</el-button>
            </el-tooltip>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RecommandActor',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active <= 2) {
        this.active++
      }
    },
    pre () {
      if (this.active > 0) {
        this.active--
      }
    }
  }
}
</script>

<style scoped>
.bottom {
    clear: both;
    text-align: center;
}
.item {
    margin: 4px;
}
</style>
