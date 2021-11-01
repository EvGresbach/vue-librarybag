<template>
  <div class="music-video">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Artist: {{item.artistName}}</p>
    <p class="card-text">Collection: {{item.collectionName}}</p>
  </div>
</template>

<script>
import {MusicVideo} from "@/models/LibraryItems";

export default {
  name: "MusicVideo",
  props: {
    item: MusicVideo,
  }
}
</script>

<style scoped>

</style>