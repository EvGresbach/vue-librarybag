<template>
  <div id="app">
    <library :library="library" @add-to-bag="addToBag"></library>
    <bag-component :bag="bag"
      @check-out-bag="checkOutBag"
    ></bag-component>
  </div>
</template>

<script>
import Bag from "@/models/Bag.js";
import BagComponent from "@/components/Bag";
import Library from "@/components/Library";
import {Movie, Album, Book} from "@/models/LibraryItems";
import LibraryCollection from "@/models/Library";

export default {
  name: 'App',
  data(){
    return {
      bag: new Bag(),
      library: new LibraryCollection()
          .addItem(new Book('Interaction Design', 200))
          .addItem(new Movie('Paw Patrol!', 78))
          .addItem(new Movie('Harriet', 122))
          .addItem(new Book('Brown Bear, Brown Bear', 0))
          .addItem(new Album('Scaled and Icy', 'Twenty One Pilots', 11))
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
      // for(let bagItem in this.bag){
      //   for(let libraryItem in this.library){
      //     if(bagItem.id === libraryItem.id){
      //       libraryItem.checkOut();
      //     }
      //   }
      // }
      this.bag.forEach(
          b => {
            if(this.library.some(i => i.id === b.id)){
              this.library.find(i => i.id === b.id).checkOut();
            }
          }
      )
      this.bag = new Bag();
    },
  }
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
