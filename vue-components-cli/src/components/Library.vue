<template>
  <div class="container">
    <h2>Library</h2>
    <div class="card-columns">
      <library-item v-for="(item, i) in library"
                    :item="item"
                    :remove-function="function(item){library.removeItem(item)}"
                    :key="i"
                    @add-to-bag="$emit('add-to-bag', item)"
      ></library-item>
      <div class="card">
        <p>Checked out: {{library.checkedOutItems().length}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import LibraryCollection from "@/models/Library";
// import {Book, Movie, Album} from "@/models/LibraryItems";
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "Library",
  components: {
    LibraryItem
  },
  props:{
    library: Array,
  },


}
</script>

<style scoped>

</style>