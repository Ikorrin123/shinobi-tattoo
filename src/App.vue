<template>
  <div class="wrapper__navigation">
    <p><span>SHINOBI</span> ART. TATTOO STUDIO</p>
    <nav class="wrapper__navigation--desktop">
      <router-link to="/">Home</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/calendar">Calendar</router-link>

      <div class="register">
        <router-link v-if="this.auth" to="/profile">Profile</router-link>
        <router-link v-if="this.auth" to="/"
          ><button @click="logout">Logout</button></router-link
        >
        <router-link to="/login"><button>Login</button></router-link>
      </div>
    </nav>
    <nav class="wrapper__navigation--mobile">
      <Slide right>
        <router-link to="/">Home</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/calendar">Calendar</router-link>
        <router-link v-if="this.auth" to="/profile">Profile</router-link>
        <router-link v-if="this.auth" to="/"
          ><button @click="logout">Logout</button></router-link
        >
        <router-link to="/login"><button>Login</button></router-link>
      </Slide>
    </nav>
  </div>
  <router-view />
  <footer class="wrapper__footer">
    <div class="col col__socialMedia">
      <h1>Social Media</h1>
      <ul>
        <li>www.facebook.com/ShinobiArtTattooStudio</li>
        <div>
          <a href="http://www.facebook.com/ShinobiArtTattooStudio"
            ><font-awesome-icon icon="fa-brands fa-facebook-f"
          /></a>
        </div>
        <li>www.instagram.com/shinobi_art.tattoo</li>
        <div>
          <a href="http://www.instagram.com/shinobi_art.tattoo"
            ><font-awesome-icon icon="fa-brands fa-instagram"
          /></a>
        </div>
      </ul>
      <p>© 2023 ShinobiArtTattooStudio</p>
    </div>
    <div class="col col__contact">
      <h1>Contact Us</h1>
      <p>
        Contact Us through the click on the phone number, social media or use
        the calendar to see if the date that suits you is available see
      </p>
      <a href="tel:123-456-789"
        ><font-awesome-icon icon="fa-brands fa-whatsapp" />662-128-487</a
      >
      <router-link to="/calendar"
        ><font-awesome-icon
          icon="fa-solid fa-calendar-days"
        />Calendar</router-link
      >
    </div>
    <div class="col col__location">
      <h1>Location</h1>
      <p>Our studio is located in two cities</p>
      <h2>Ostrołęka</h2>
      <span>Gorbatowa</span>
      <span> 5/4A</span>
      <span>07-410</span>
      <h2>Lipsko</h2>
      <span>Sandomierska 1</span>
      <span>27-300</span>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
import { Slide } from "vue3-burger-menu";
export default {
  components: {
    Slide,
  },
  data() {
    return {
      auth: "",
    };
  },

  mounted() {
    axios
      .get("http://127.0.0.1:5000/api/users/profile/", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        this.auth = res.data[0].user;
        console.log(res.data[0].user);
      });
  },

  methods: {
    logout() {
      localStorage.clear();
      alert("you are logged out");
      this.$router.go("/");
    },
  },
};
</script>

<style lang="scss">
@import "/Styles/global.scss";
</style>
