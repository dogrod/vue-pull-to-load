<template lang="pug">
.pull-to-load(
  @touchstart="handleTouchStart"
  @touchmove="handleTouchMove"
  @touchend="handleTouchEnd"
)
  .pull-to-load__wrapper(
    ref="ptlWrapper"
    :style="containerStyle"
  )
    slot(name="top")
      .pull-to-load__top pull down to refresh
    slot
    slot(name="bottom")
      .pull-to-load__bottom pull up to load more
</template>

<script>
import pullToLoad from './pull-to-load.js'

export default pullToLoad
</script>

<style lang="stylus">
@import './pull-to-load'

</style>
