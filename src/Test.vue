<template>
  <div>
    <div class="test-div">
      <h3>这是用户自定义的 Test.vue ----{{username}}</h3>
      <button @click="changeName">修改用户名</button>
    </div>
    <div>ABCDEFGHIJKLMNOPQISTUVWXYZ</div>
  </div>
</template>

<script>
  // 固定写法!
  export default {

    // 定义数据, 和自定义组件中的定义是一致的!
    data: function() {
      return {
        username: 'zhangsan'
      }
    },
    // 定义方法
    methods: {
      changeName: function() {
        this.username = 'lisi';
      }
    }

  }
</script>

<style lang="less" scoped>
.test-div {
  background-color: aquamarine;
  h3 {
    color: red;
  }
}
</style>