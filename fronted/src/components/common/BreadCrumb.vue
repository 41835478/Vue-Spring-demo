<template>
  <div class="crumb-wrapper">
    <el-breadcrumb class="bread-crumb" separator=">">
      <el-breadcrumb-item class="breadcrumb-item" :to="{ path: breadcrumb.link }"  v-for="breadcrumb in breadcrumbs">
        {{ breadcrumb.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      breadcrumbs () {
        return this.$store.getters.breadcrumbs
      }
    }
  }

</script>

<style scoped>

  .crumb-wrapper {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 15px;
    background: #eee;
    color: #888;
    border-top: 2px solid #c60023;
  }

  .bread-crumb {
    margin: 0 auto;
    width: 1080px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    font-weight: 400;
  }
</style>

