<template>
  <div class="indexPage">
      <p>
          <span @click="redirectPage(1)" class="point">

               <span style="color: blue;font-size: 30px">德邦前端组件库</span>
          </span>
      </p>
      <p>
          <span @click="redirectPage(2)" class="point">项目名：
              <span style="color: red;">专业市场</span>
          </span>
      </p>

  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  created() {


  },
  methods: {
    // 路由跳转
    redirectPage(type) {
      switch (type) {
        case 1:
          break;
        case 2:
          this.$router.push({ path: "zhuanye" });
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.indexPage {
  .point{
    cursor: pointer;
  }
    .red{
        color:red;
    }
}
</style>
