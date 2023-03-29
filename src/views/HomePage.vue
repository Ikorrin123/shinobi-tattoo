<template>
  <div class="wrapper wrapper__homePage">
    <div class="wrapper__homePage--artists">
      <div class="wrapper__homePage--artists col">
        <img :src="czarek" alt="" />
        <h2>Cezary Kolenda</h2>
        <p>Information</p>
        <div class="wrapper__homePage--artists col--information">
          <p>Experience: 10+yers</p>
          <p>
            Styles: Traditional, Realism or Realistic, Watercolor , New School ,
            Neo Traditional, Japanese , Blackwork, cartoon, black & grey,
            surrealism, horror, individual projects
          </p>
        </div>
      </div>
      <div class="wrapper__homePage--artists col">
        <img :src="adrian" alt="" />
        <h2>Adrian Kmiołek</h2>
        <p>Information</p>
        <div class="wrapper__homePage--artists col--information">
          <p>Experience: 2+years</p>
          <p>
            Styles: Traditional, Realism or Realistic, New School , Neo
            Traditional,
          </p>
        </div>
      </div>
    </div>
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
    <div v-bind:class="{ active: isActive }" class="wrapper__homePage--rules">
      <h1>Rules</h1>
      <ul>
        <li>
          1. After setting the date for the tattoo, the client is obliged to pay
          the "deposit", which is associated with the acceptance of the
          applicable regulations.
        </li>
        <li>2. The deposit is included in the price of the tattoo.</li>
        <li>3. The deposit is completely non-refundable.</li>
        <li>
          4. The set date can be changed only once without losing the deposit,
          at least 3 days before it is set.
        </li>
        <li>5. We do not make tattoos for minors.</li>
      </ul>
      <div
        v-bind:class="{ active: isActive }"
        class="wrapper__homePage--rules holder"
        v-show="readMore"
      >
        <ul>
          <li>
            6. We do not make tattoos for people under influence of alcohol,
            drugs.
          </li>
          <li>
            7. The customer is obliged to inform tattoo artist about the state
            of health and admission medications, which may have a negative
            impact on procedure.
          </li>
          <li>
            8. We do not make tattoos on freshly tanned skin or after performing
            other cosmetic skin treatments.
          </li>
          <li>
            9. The tattoo artist has the right to refuse a tattoo if he
            considers that the client has not prepared properly for the
            procedure (see point: 7.8.9)
          </li>
          <li>
            10. It is forbidden for children under 15 years of age to stay in
            the studio.
          </li>
          <li>11. It is forbidden to bring animals to the studio.</li>
          <li>
            12. The studio is not responsible for the healing process and side
            effects resulting from the customer's improper care of the tattoo.
          </li>
          <li>13. Tattoo correction is not included in the price.</li>
          <li>
            14. The studio does not make tattoos from photos of already made
            tattoos The client is obliged to send the project or determine the
            details of the project by the tattoo artist on the day of acceptance
            of the regulations (on the day of registration).
          </li>
          <li>
            15. The price for the treatment is individual, it depends on the
            place where the tattoo is made, its size, difficulty and the
            consumption of the necessary material needed to make it.
          </li>
          <li>
            16. Gift vouchers purchased in the studio are valid for 3 months.
          </li>
          <li>
            17. The studio is completely non-smoking/etc. and prohibition of
            alcohol consumption.
          </li>
        </ul>
      </div>
      <button @click="activation">
        <span v-if="readMore">Read Less</span>
        <span v-else>Read More</span>
      </button>
    </div>
  </div>
  <Modal
    v-if="showModal"
    @close="toggleModal"
    :current="imgaes[selectedIndex]"
  />
</template>

<script>
import czarek from "../assets/czarek.jpg";
import adrian from "../assets/adrian.jpg";
import { computed } from "@vue/runtime-core";
import Modal from "./Modal.vue";
export default {
  name: "HomePage",

  components: {
    Modal,
  },

  data() {
    return {
      czarek: czarek,
      adrian: adrian,
      readMore: false,
      showModal: false,
      selectedIndex: 0,
      isActive: false,

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
    activation() {
      this.isActive = !this.isActive;
      this.readMore = !this.readMore;
    },
  },
};
</script>

<style></style>
