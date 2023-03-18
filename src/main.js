import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import { SetupCalendar, Calendar, DatePicker } from "v-calendar";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUserSecret,
  faCalendarDays,
  faLocationDot,
  faX,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faCalendarDays,
  faLocationDot,
  faX,
  faEnvelope,
  faLock,
  faUser
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(SetupCalendar, {})
  .use(VueAxios, axios)
  .component("Calendar", Calendar)
  .component("DatePicker", DatePicker)
  .mount(".wrapper");
