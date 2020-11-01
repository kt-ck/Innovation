<template>
    <div>
        <el-steps :active="active" finish-status="success" align-center>
            <el-step title="步骤 1" icon="el-icon-edit" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
        <div class="bottom">
            <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                <el-button @click="pre">上一步</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                <el-button @click="next">下一步</el-button>
            </el-tooltip>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RecommandMovie',
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
