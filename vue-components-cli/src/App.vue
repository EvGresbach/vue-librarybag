<template>
  <div>
    <b-navbar class="mt-0 justify-content-between" type="dark" variant="dark">
      <b-navbar-brand class="m-4">Library Bag</b-navbar-brand>
      <b-nav-form class="m-4" @submit.prevent="searchItems()">
        <b-form-input class="mr-sm-2" placeholder="Search" v-model="searchTerm"></b-form-input>
        <b-button variant="outline-success" type="submit">Search</b-button>
      </b-nav-form>
    </b-navbar>
    <div id="app">
      <library :library="library" @add-to-bag="addToBag"></library>
      <bag-component :bag="bag"
                     @check-out-bag="checkOutBag"
      ></bag-component>
    </div>
  </div>

</template>

<script>
import Bag from "@/models/Bag.js";
import BagComponent from "@/components/Bag";
import Library from "@/components/Library";
import {Movie, Book, Album, Podcast, MusicVideo, Software, ShortFilm, TvShow, Audiobook, Song} from "@/models/LibraryItems";
import LibraryCollection from "@/models/Library";
// import axios from "axios";
const axios = require('axios').default;

export default {
  name: 'App',
  data(){
    return {
      bag: new Bag(),
      library: new LibraryCollection(),
      searchTerm: '',
      }
    },
  components: {
    BagComponent,
    Library,
  },
  methods: {
    addToBag(item){
      this.bag.addItem(item)
    },
    checkOutBag(){
      this.bag.forEach(
          b => {
            if(this.library.some(i => i.id === b.id)){
              this.library.find(i => i.id === b.id).checkOut();
            }
          }
      )
      this.bag = new Bag();
    },
    searchItems(){
      if(this.searchTerm){
        let url = 'https://itunes.apple.com/search';
        let config = {
          params:{
            term: this.searchTerm,
            limit: 25,
          }
        }
        console.log(axios(url, config));
        axios.get(url, config)
            .then((response) => {
              //change into the correct obj
              for(let i = 0; i < response.data.results.length; i++){
                // movie
                if(response.data.results[i].kind === 'feature-movie')
                  this.library.addItem(Object.assign(new Movie, response.data.results[i]))
                //   podcast
                if(response.data.results[i].kind === 'podcast')
                  this.library.addItem(Object.assign(new Podcast, response.data.results[i]))
                //   music (album)
                if(response.data.results[i].kind === 'song'){
                  if(!this.library.some(l => l.collectionId === response.data.results[i].collectionId))
                    this.library.addItem((Object.assign(new Album, response.data.results[i])))

                  this.library.addItem(Object.assign(new Song, response.data.results[i]))
                }
                //   musicVideo
                if(response.data.results[i].kind === 'music-video')
                  this.library.addItem(Object.assign(new MusicVideo, response.data.results[i]))
                //   audiobook
                if(response.data.results[i].kind === 'audiobook')
                  this.library.addItem(Object.assign(new Audiobook, response.data.results[i]))
                //   shortfilm
                if(response.data.results[i].kind === 'short-film')
                  this.library.addItem(Object.assign(new ShortFilm, response.data.results[i]))
                //   tvshow
                if(response.data.results[i].kind === 'tv-episode')
                  this.library.addItem(Object.assign(new TvShow, response.data.results[i]))
                //   software
                if(response.data.results[i].kind === 'software')
                  this.library.addItem(Object.assign(new Software, response.data.results[i]))
                //   ebook (book)
                if(response.data.results[i].kind === 'ebook')
                  this.library.addItem(Object.assign(new Book, response.data.results[i]))
              }
            })
            .catch((error)=> {
              console.error(error);
            })
            .finally(() => {
              this.searchTerm = '';
            })
      }
    }

  },


}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
