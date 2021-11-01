<template>
  <div class="card" :class="item.isAvailable() ? 'border-success' : 'border-warning'" style="border-width: 3px;">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
      <p>{{item.qty}}</p>
    </div>
    <div class="card-footer">
      <button @click="item.checkOut()" class="btn btn-secondary">Check Out</button>
      <button @click="item.checkIn()" class="btn btn-secondary">Check In</button>
      <button @click="addToBag" class="btn btn-secondary">Add To Bag</button>
      <button @click="item.remove()" class="btn btn-warning">Remove Me</button>
    </div>
  </div>
</template>

<script>
import Book from "./Book";
import Movie from "@/components/Movie";
import Album from "@/components/Album";
import Podcast from "@/components/Podcast";
import MusicVideo from "@/components/MusicVideo";
import Audiobook from "@/components/Audiobook";
import ShortFilm from "@/components/ShortFilm";
import TvShow from "@/components/TvShow";
import Software from "@/components/Software";
import Song from "@/components/Song";

export default {
  name: "LibraryItem",
  components: {
    Book,
    Movie,
    Album,
    Podcast,
    MusicVideo,
    Audiobook,
    ShortFilm,
    TvShow,
    Software,
    Song,
  },
  props: {
    item: Object,
    removeFunction: Function,
  },
  methods: {
    addToBag(){
      if (this.item.qty > 0){
        this.item.checkOut();
        this.$emit('add-to-bag');
      }
    }
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