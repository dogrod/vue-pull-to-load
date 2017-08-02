<template lang="pug">
v-touch(
  class="pull-to-refresh"
  @panup="handlePanup"
)
  slot
</template>

<script>
export default {
  methods: {
    handlePanup(e) {
      console.log(e)
    },
  },
}
</script>

<style lang="stylus">
</style>