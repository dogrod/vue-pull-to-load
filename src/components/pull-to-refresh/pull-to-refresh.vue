<template lang="pug">
v-touch(
  class="pull-to-refresh"
  ref="ptrContainer"
  @panup="handlePanUp"
  @panend="handlePanEnd"
)
  slot
</template>

<script>
export default {
  data() {
    return {
      distanceToAction: 50,
    }
  },
  methods: {
    handlePanUp(e) {
      const containerEl = this.$refs.ptrContainer.$el
      const pullDistance = e.distance
      const moveDistance = (e.distance > this.distanceToAction) ? this.distanceToAction : e.distance

      const translate = `translate3d( 0, ${-pullDistance}px, 0 )`
      containerEl.style.transform = translate
      containerEl.style.webkitTransform = translate
      this.$emit('pullUp', e)
    },
    handlePanEnd() {
      this.$refs.ptrContainer.$el.style.transform = ''
      this.$refs.ptrContainer.$el.style.webkitTransform = ''
    },
  },
}
</script>

<style lang="stylus">

.pull-to-refresh
  height 100%
  width 100%
</style>