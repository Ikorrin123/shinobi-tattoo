<template>
  <div class="wrapper__navigation">
    <nav>
      <p><span>SHINOBI</span> ART. TATTOO STUDIO</p>

      <router-link to="/">Home</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/calendar">Calendar</router-link>
    </nav>
    <div class="register">
      <router-link to="/login"><button>Login</button></router-link>
    </div>
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
      <span>Gorbatowa 5/4A</span>
      <span>07-410</span>
      <h2>Lipsko</h2>
      <span>Sandomierska 1</span>
      <span>27-300</span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "/Styles/global.scss";
</style>
