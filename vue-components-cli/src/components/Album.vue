<template>
  <div class="album">
    <h3 class="card-title">{{item.collectionName}}</h3>
    <p class="card-text">Artist: {{item.artistName}}</p>
    <p class="card-text">Track Count: {{item.trackCount}}</p>
  </div>
</template>

<script>
import {Album} from "@/models/LibraryItems";

export default {
  name: "Album",
  props: {
    item: Album,
  }
}
</script>

<style scoped>

</style>