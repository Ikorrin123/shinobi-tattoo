const router = require("express").Router();

//bring in the User Registration function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser,
} = require("../utilis/Auth");

// users registration route
router.post("/register-user", async (req, res) => {
  console.log(req.body);
  await userRegister(req.body, "user", res);
});

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
  return res.json(serializeUser(req.user));
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
    return res.json("hello admin");
  }
);

module.exports = router;
