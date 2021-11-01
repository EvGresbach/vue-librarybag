<template>
  <div class="software">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Seller: {{item.sellerName}}</p>
  </div>
</template>

<script>
import {Software} from "@/models/LibraryItems";

export default {
  name: "Software",
  props: {
    item: Software,
  }
}
</script>

<style scoped>

</style>