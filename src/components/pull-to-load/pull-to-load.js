export default {
  name: 'PullToLoad',
  props: {
    maxDistance: {
      type: Number,
      default: 80,
    },
    distanceRange: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      startY: 0,
      startScrollTop: 0,
      currentY: 0,
      direction: '',
      translate: 0,
      bottomReached: false,
      scrollContainer: null,
    }
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(0, ${this.translate}px, 0)`,
      }
    },
  },
  methods: {
    /**
     * touch start event handler
     * @param {Object} e - event object
     */
    handleTouchStart(e) {
      this.startY = e.touches[0].clientY
      this.startScrollTop = this.getScrollTop(this.scrollContainer)
    },
    /**
     * touch move event handler
     * @param {Object} e - event object
     */
    handleTouchMove(e) {
      this.currentY = e.touches[0].clientY

      const maxDistance = this.maxDistance
      const distance = (this.currentY - this.startY) / this.distanceRange

      this.direction = distance > 0 ? 'down' : 'up'
      if (this.direction === 'down' && this.getScrollTop(this.scrollContainer) === 0) {
        event.preventDefault()
        event.stopPropagation()

        this.translate =
          Math.abs(distance) <= maxDistance
            ? this.translate = distance
              : this.translate = (distance > 0)
                ? maxDistance
                  : -maxDistance

        if (this.translate < 0) {
          this.translate = 0
        }
      }

      if (this.direction === 'up') {
        this.bottomReached = this.bottomReached || this.isScrollToBootom()
      }

      if (this.direction === 'up' && this.bottomReached) {
        event.preventDefault()
        event.stopPropagation()

        this.translate =
          Math.abs(distance) <= maxDistance
            ? this.translate = distance
              : this.translate = (distance > 0)
                ? maxDistance
                  : -maxDistance

        if (this.translate > 0) {
          this.translate = 0
        }
      }
    },
    /**
     * touch end event handler
     */
    handleTouchEnd() {
      if (this.direction === 'up' && this.bottomReached) {
        this.bottomReached = false
      }
      this.translate = 0
    },
    /**
     * check if scroll to bottom
     * @return {boolean} return scroll to bottom state
     */
    isScrollToBootom() {
      if (this.scrollContainer === window) {
        return document.body.scrollTop + document.documentElement.clientHeight
          === document.body.scrollHeight
      }

      return this.$el.getBoundingClientRect().bottom
        <= this.scrollContainer.getBoundingClientRect().bottom
    },
    /**
     * locate this element's scroll container
     * @param {Object} element - dom element
     * @return {Object} return scroll container
     */
    getScrollContainer(element) {
      let currentNode = element
      while (currentNode
        && currentNode.tagName !== 'html'
        && currentNode.tagName !== 'body'
        && currentNode.nodeType === 1) {
        /**
         * Use document.defaultView.getComputedStyle instead of window.getComputedStyle
         * Because of cross-browser and cross-contexts support
         * e.g. window.getComputedStyle would fail for iframes in FireFox 3.6
         * In most of web browsers, document.defaultView === window returns true
         * Inspired by jQuery source code
         * Note by Rodrick Zhu
         */
        const overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
        if (overflowY === 'scroll' || overflowY === 'auto') {
          return currentNode
        }
        currentNode = currentNode.parentNode
      }
      return window
    },
    /**
     * input a element and get this element's scroll top
     * @param {Object} element - dom element
     * @return {number} return scroll top
     */
    getScrollTop(element) {
      if (element === window) {
        // From jQuery
        return (window.pageYOffset || document.documentElement.scrollTop)
          - (document.documentElement.clientTop || 0)
      }
      return element.scrollTop
    },
  },
  mounted() {
    this.scrollContainer = this.getScrollContainer(this.$el)
  },
}
