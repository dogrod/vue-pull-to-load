<template lang="pug">
.pull-to-load(
  @touchstart.passive="handleTouchStart"
  @touchmove="handleTouchMove"
  @touchend.passive="handleTouchEnd"
)
  .pull-to-load__wrapper(
    ref="ptlWrapper"
    :style="containerStyle"
  )
    slot(name="top")
      .pull-to-load__top
        .pull-to-load__top__bg(
          :style="topBackgroundStyle"
        )
          .pull-to-load__circle(
            :style="topAreaCircleStyle"
          )
        .pull-to-load__top__content {{ topHint }}
    slot
  slot(name="bottom")
    div(
      :class="bottomClass",
    ) {{ bottomHint }}
</template>

<script>
import pullToLoad from './pull-to-load.js'

export default pullToLoad
</script>

<style lang="stylus">
@import './pull-to-load'

</style>
