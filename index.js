const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { success, error } = require("consola");
const { connect } = require("mongoose");

//bring in the app constants

const { DB, PORT } = require("./config");

// initialize the application
const app = exp();

//Middlewear
app.use(bp.json({ limit: "10mb" }));
app.use(cors());
app.use(bp.urlencoded({ extended: true }));
app.use(passport.initialize());

require("./middlewares/passport")(passport);

//user router middlewar
app.use("/api/users", require("./routes/users"));

const startApp = async () => {
  try {
    // conncection with db
    await connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    success({
      message: `Succesfully connected with the Database \n${PORT}`,
      badge: true,
    });

    //start listening for the server

    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
  } catch (err) {
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true,
    });
  }
};
startApp();
