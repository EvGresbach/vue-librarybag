<template>
  <div class="book">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Author: {{item.artistName}}</p>
  </div>
</template>

<script>
import {Book} from "@/models/LibraryItems";

export default {
  name: "Book",
  props: {
    item: Book
  },
}
</script>

<style scoped>

</style>