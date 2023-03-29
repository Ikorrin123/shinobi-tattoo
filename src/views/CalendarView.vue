<template>
  <div class="wrapper wrapper__homePage">
    <div class="wrapper__homePage--calendar">
      <DatePicker
        v-model="date"
        :attributes="attributes"
        @dayclick="onDayClick"
      />
      <ModalAdminViewVue
        v-if="showModal"
        @close="onDayClick"
        :calendar-send-info="calendarSendInfo"
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
          <input type="file" @change="handleFileUpload($event)" />
        </label>
        <button @click="postUserInfromation" class="form--submit">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ModalAdminViewVue from "./ModalAdminView.vue";
export default {
  components: {
    ModalAdminViewVue,
  },

  data() {
    return {
      showModal: false,
      days: [],
      name: "",
      surname: "",
      pickedDay: "",
      phone: "",
      chosenImage: "",
      status: "",
      customerName: "",
      preview: null,
      image: null,
      newValue: "",

      calendarSendInfo: {},

      attributes: [
        {
          dot: "red",
          dates: {
            start: new Date("1/1/2018"),

            ordinalWeekdays: { [-1]: 6 }, // ...on the last Friday
          },
        },
      ],
    };
  },

  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
      let p = Promise.resolve();
      p = p.then(() =>
        this.convertBase64(this.file).then((base64) => {
          this.base64 = base64;
          console.log(base64);
        })
      );
    },

    convertBase64(file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    },
    onDayClick(day) {
      axios
        .get("http://127.0.0.1:5000/api/users/admin-protected/", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          this.showModal = !this.showModal;
          axios
            .get(
              `http://127.0.0.1:5000/api/users/calendar/?pickedDay=${day.id}`,
              {
                headers: { Authorization: localStorage.getItem("token") },
              }
            )
            .then((res) => {
              console.log(res);
              this.calendarSendInfo = res.data[0];
              console.log(this.calendarSendInfo);
            });
        });

      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
        this.pickedDay = day.id;
        console.log(this.pickedDay);
      }
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

    postUserInfromation() {
      let userInformation = {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        pickedDay: this.pickedDay,
        file: this.base64,
      };
      axios
        .post("http://localhost:5000/api/users/calendar", userInformation, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then(
          (res) => {
            alert(res.data.message);
            this.$router.go("/");
          },

          (errorCollect) => {
            alert(errorCollect.response.data.message);
            console.log(errorCollect.response.data.message);
            this.errorReg = errorCollect.response.data.message;
          }
        );
    },
  },
};
</script>

<style></style>
