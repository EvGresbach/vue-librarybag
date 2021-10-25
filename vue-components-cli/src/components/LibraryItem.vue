<template>
  <div class="card" :class="item.isAvailable() ? 'border-success' : 'border-warning'" style="border-width: 3px;">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
      <p>{{item.qty}}</p>
    </div>
    <div class="card-footer">
      <button @click="item.checkOut()" class="btn btn-secondary">Check Out</button>
      <button @click="item.checkIn()" class="btn btn-secondary">Check In</button>
      <button @click="$emit('add-to-bag')" class="btn btn-secondary">Add To Bag</button>
      <button @click="item.remove()" class="btn btn-warning">Remove Me</button>
    </div>
  </div>
</template>

<script>
import Book from "./Book";
import Movie from "@/components/Movie";
import Album from "@/components/Album";

export default {
  name: "LibraryItem",
  components: {
    Book,
    Movie,
    Album
  },
  props: {
    item: Object,
    removeFunction: Function,
  },
  computed: {
    typeOfItem(){
      return this.item.constructor.name;
    }
  },
}
</script>

<style scoped>

</style>