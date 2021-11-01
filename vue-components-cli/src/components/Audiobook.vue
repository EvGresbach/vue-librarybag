<template>
  <div class="audiobook">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Artist: {{item.artistName}}</p>
  </div>
</template>

<script>
import {Audiobook} from "@/models/LibraryItems";

export default {
  name: "Audiobook",
  props: {
    item: Audiobook,
  }
}
</script>

<style scoped>

</style>