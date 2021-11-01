<template>
  <div class="tv-show">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Show: {{item.collectionName}}</p>
    <p class="card-text">Runtime: {{item.trackTimeMillis}}</p>
  </div>
</template>

<script>
import {TvShow} from "@/models/LibraryItems";

export default {
  name: "TvShow",
  props: {
    item: TvShow,
  }
}
</script>

<style scoped>

</style>