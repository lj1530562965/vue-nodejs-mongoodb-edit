<template>
  <div>
    <div class="md-modal modal-msg md-modal-transtion" v-bind:class="{'md-show':mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <div class="md-title">Login in</div>
          <button class="md-close" @click="closeModal">close</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-if="mdShow" @click="closeModal"></div>
  </div>
</template>
<script>
export default {
  props: ['mdShow'],
  data () {
    return {
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>
