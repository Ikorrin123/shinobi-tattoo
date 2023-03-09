<template>
  <div class="wrapper wrapper__homePage">
    <div class="wrapper__homePage--gallery">
      <div
        v-for="(product, index) in imgaes"
        :key="index"
        @click="toggleModal(index)"
        class="wrapper_homePage--gallery multiItem"
      >
        <img
          class="wrapper_homePage--gallery multiItem--pictures"
          :src="product.src"
          alt=""
        />
        <img
          class="wrapper_homePage--gallery multiItem--artist"
          :src="product.name"
          alt=""
        />
        <h2>
          {{ product.name == czarek ? "Cezary Kolenda" : "Adrian Kmiołek" }}
        </h2>
      </div>
    </div>
    <Modal
      v-if="showModal"
      @close="toggleModal"
      :current="imgaes[selectedIndex]"
    />
  </div>
</template>

<script>
import czarek from "../assets/czarek.jpg";
import adrian from "../assets/adrian.jpg";
import Modal from "./Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      czarek: czarek,
      adrian: adrian,
      selectedIndex: 0,
      showModal: false,

      imgaes: [
        { src: require("../assets/tattoo1.jpg"), name: czarek },
        { src: require("../assets/tattoo2.jpg"), name: adrian },
        { src: require("../assets/tattoo3.jpg"), name: czarek },
        { src: require("../assets/tattoo4.jpg"), name: adrian },
        { src: require("../assets/tattoo5.jpg"), name: czarek },
        { src: require("../assets/tattoo6.jpg"), name: adrian },
        { src: require("../assets/tattoo7.jpg"), name: czarek },
        { src: require("../assets/tattoo8.jpg"), name: adrian },
        { src: require("../assets/tattoo9.jpg"), name: czarek },
        { src: require("../assets/tattoo10.jpg"), name: adrian },
        { src: require("../assets/tattoo11.jpg"), name: czarek },
        { src: require("../assets/tattoo12.jpg"), name: adrian },
      ],
    };
  },
  methods: {
    toggleModal(index) {
      this.showModal = !this.showModal;
      this.selectedIndex = index;
    },
  },
};
</script>

<style></style>
