const router = require("express").Router();
const ObjectId = require("mongodb").ObjectID;
const calendar = require("../models/calendar");

//bring in the User Registration function
const {
  userAuth,
  userLogin,
  userRegister,
  checkRole,
  serializeUser,
  opencalendar,
  answerCalendar,

  trying1,
} = require("../utilis/Auth");

// users registration route
router.post("/register-user", async (req, res) => {
  console.log(req.body);
  await userRegister(req.body, "user", res);
});

router.post("/calendar", userAuth, async (req, res) => {
  console.log(req.user._id);
  await opencalendar(req.body, req.user._id, res);
});

router.post(
  "/calendar-answer",
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {
    console.log(req.body);
    await answerCalendar(req.body, req.body, res);
  }
);

// admin registration route
router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

// users login router
router.post("/login-user", async (req, res) => {
  await userLogin(req.body, "user", res);
});

// admin login route
router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});

//profile route
router.get("/profile", userAuth, async (req, res) => {
  await calendar
    .find({ user: ObjectId(req.user._id) }) // day: req.body.day dla admina do modalu
    .then(async (calendar) => {
      console.log(calendar);
      if (calendar) {
        return res.json(calendar);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/calendar", userAuth, async (req, res) => {
  console.log(req.query.pickedDay);
  await calendar
    .find({ pickedDay: req.query.pickedDay }) // day: req.body.day dla admina do modalu
    .then(async (calendar) => {
      console.log(calendar);
      if (calendar) {
        return res.json(calendar);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/calendar-days", userAuth, async (req, res) => {
  console.log(req.body.pickedDay);
  await calendar
    .find(req.body) // day: req.body.day dla admina do modalu
    .then(async (calendar) => {
      console.log(calendar);
      if (calendar) {
        return res.json(calendar);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
// users protected router
router.get(
  "/user-protected",
  userAuth,
  checkRole(["user"]),
  async (req, res) => {
    return res.json("hello user");
  }
);

// admin protected route
router.get(
  "/admin-protected",
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {
    return res.json(req.user.role);
  }
);

module.exports = router;
