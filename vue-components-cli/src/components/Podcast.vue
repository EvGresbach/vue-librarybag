<template>
  <div class="podcast">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Artist: {{item.artistName}}</p>
    <p class="card-text">Collection: {{item.collectionName}}</p>
  </div>
</template>

<script>
import {Podcast} from "@/models/LibraryItems";

export default {
  name: "Podcast",
  props: {
    item: Podcast,
  }
}
</script>

<style scoped>

</style>