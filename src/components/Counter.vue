<template>
  <div>
    <button @click="increment">+</button>
    <button v-on:click="decrement">-</button>
    <p><span>{{num}}</span></p>
  </div>
</template>

<script>
export default {
  props: ['num'],
  data () {
    return {
      num: 0
    }
  },
  methods: {
    increment () {
      this.$emit('incre')
      import './../util'
    },
    decrement () {
      this.$emit('decre')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
