<template>
  <div class="hello">
    这是商品列表页面
    {{$route.params.goodsId}}
    {{$route.params.name}}
    <router-link to="/goods/title">title</router-link>
    <router-link to="/goods/image">image</router-link>

    <div>
      <router-view></router-view>
    </div>
    <router-link v-bind:to="{name:'cart',params:{cartid:123}}">cart</router-link>
    <button @click="jump">cart</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 10
    }
  },
  methods: {
    jump () {
      // this.$router.push('/cart')
      // this.$router.push({path: '/cart'})
      this.$router.push({path: '/cart?goodsid=123'})
      // this.$router.go(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
