<template>
  <div class="wrapper wrapper__homePage">
    <div class="wrapper__homePage--calendar">
      <DatePicker
        v-model="date"
        :attributes="attributes"
        @dayclick="onDayClick"
      />
      <div class="wrapper__homePage--calendar form">
        <h2>Tattoo Form</h2>
        <label for="text">Name</label>
        <input type="text" v-model="name" />
        <label for="text">Surname</label>
        <input type="text" v-model="surname" />
        <label for="text">Phone Number</label>
        <input type="number" v-model="phone" />
        <label for="images" class="form--drop-container">
          <span>Drop illustrative photo here</span>
          or
          <input type="file" accept="image/*" @change="previewImage" />
        </label>
        <button class="form--submit">Submit</button>
      </div>
      <div class="wrapper__homePage--calendar customerForm">
        <h1>Information</h1>
        <div class="wrapper__homePage--calendar customerForm--information">
          <p>Name: {{ name }}</p>
          <p>Surname: {{ surname }}</p>
          <p>Phone: {{ phone }}</p>
        </div>
        <div class="wrapper__homePage--calendar customerForm--picture">
          <img :src="preview" />
        </div>
        <div class="wrapper__homePage--calendar customerForm--buttonHolder">
          <button>Accept</button>
          <button>Decline</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [],
      customer: [{ name: "" }, { surname: "" }, { phone: "" }],
      preview: null,
      image: null,
    };
  },
  computed: {
    dates() {
      return this.days.map((day) => day.id);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  methods: {
    onDayClick(day) {
      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
      console.log(day);
    },
    previewImage: function (event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style></style>
