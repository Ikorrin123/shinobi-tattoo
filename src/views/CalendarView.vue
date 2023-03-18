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
          or
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
      status: "",
      customerName: "",
      preview: null,
      image: null,
      calendarSendInfo: {},
      file: "",

      attributes: [
        // This is a single attribute
        {
          highlight: true, // Boolean, String, Object
          dot: true, // Boolean, String, Object

          content: "red", // Boolean, String, Object
        },
      ],
    };
  },

  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
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
        console.log(day.id);
      }
    },

    postUserInfromation() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("name", this.name);
      formData.append("surname", this.surname);
      formData.append("phone", this.phone);
      formData.append("pickedDay", this.pickedDay);
      formData.append("state", this.state);

      console.log(formData);

      axios
        .post(
          "http://localhost:5000/api/users/calendar",
          formData,

          {
            headers: {
              Authorization: localStorage.getItem("token"),
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(
          (res) => {
            console.log(res);
          },

          (errorCollect) => {
            console.log(errorCollect.response);
            this.errorReg = errorCollect.response.data.message;
          }
        );
    },
  },
};
</script>

<style></style>
