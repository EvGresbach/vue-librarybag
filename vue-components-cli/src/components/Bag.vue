<template>
  <div class="container">
    <h2>Bag</h2>
    <div class="card">
      <div class="card-columns">
        <bag-item v-for="(item, i) in bag"
                      :item="item"
                      :remove-function="function(item){bag.removeItem(item)}"
                      :key="i"
        ></bag-item>
        <div class="card">
          <button @click="$emit('check-out-bag')" class="btn btn-primary">Check out {{bag.length}} items</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bag from "@/models/Bag";
import BagItem from "@/components/BagItem";

export default {
  name: "Bag",
  props: {
    bag: Array || Bag,
  },
  components: {
    BagItem
  }
}
</script>

<style scoped>

</style>