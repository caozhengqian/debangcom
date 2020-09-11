<template>
    <div class='ZhuanYe'>
        <p>专业市场总结的组件</p>
        <img style="width:500px;height:250px;float:left" :src="title"/>
        <img style="width:500px;height:250px;float:right" :src="addCity"/>
    </div>

</template>

<script>
  //import { mapState } from "vuex";
  //import All from "./comLife/All";
  import addCity from "./gif/addCity.gif"
  import title from "./gif/title.gif"
  export default {
    components: {
      //       All,
    },
    name: "ZhuanYe",
    props: {
      //  msg: String
    },
    computed: {
      // ...mapState(["activityData"])
    },
    data() {
      return {
        addCity:addCity,
        title:title,
      };
    },
    created() {

    },
    methods: {
      aa() {
      }
    }

  };
</script>

<style lang="less" scoped>
    .ZhuanYe {

    }
</style>
