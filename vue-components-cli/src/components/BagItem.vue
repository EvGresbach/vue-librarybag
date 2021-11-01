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
  name: "BagITem",
  props: {
    item: Object,
    removeFunction: Function,
  },
  components:{
    BagItem,
    Movie,
    Book,
    Album,
    Podcast,
    MusicVideo,
    Audiobook,
    ShortFilm,
    TvShow,
    Software,
    Song,
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