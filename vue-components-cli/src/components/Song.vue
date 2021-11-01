<template>
  <div class="song">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Artist: {{item.artistName}}</p>
    <p class="card-text">Collection: {{item.collectionName}}</p>
  </div>
</template>

<script>
import {Song} from "@/models/LibraryItems";

export default {
  name: "Song",
  props: {
    item: Song,
  }
}
</script>

<style scoped>

</style>