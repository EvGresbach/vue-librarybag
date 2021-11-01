<template>
  <div class="short-films">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Creator: {{item.artistName}}</p>
  </div>
</template>

<script>
import {ShortFilm} from "@/models/LibraryItems";

export default {
  name: "ShortFilm",
  props: {
    item: ShortFilm,
  }
}
</script>

<style scoped>

</style>