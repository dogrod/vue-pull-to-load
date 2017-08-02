<script>
import pullToRefresh from '@/components/pull-to-refresh/pull-to-refresh'

export default {
  components: {
    pullToRefresh,
  },
  render() {
    return (
      <div class="index">
        <pull-to-refresh>
          index
        </pull-to-refresh>
      </div>
    )
  },
}
</script>

<style>
</style>