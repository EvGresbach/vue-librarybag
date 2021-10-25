<template>
  <div class="card" :class="item.isAvailable() ? 'border-success' : 'border-warning'" style="border-width: 3px;">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button class="btn btn-secondary">Add To Bag</button>
      <button @click="item.remove()" class="btn btn-warning">Remove Me</button>
    </div>
  </div>
</template>

<script>
import BagItem from "@/components/BagItem";
import Book from "@/components/Book";
import Movie from "@/components/Movie";
import Album from "@/components/Album";

export default {
  name: "BagITem",
  props: {
    item: Object,
    removeFunction: Function,
  },
  components:{
    BagItem,
    Movie,
    Book,
    Album
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