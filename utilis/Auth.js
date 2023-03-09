const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const { SECRET } = require("../config");

//to register the user(admin,user)

const userRegister = async (userDets, role, res) => {
  try {
    //validate the user
    console.log(userDets);
    let usernameNotTaken = await validateUsername(userDets.username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: `username is already taken.`,
        successs: false,
      });
    }

    //validate the email
    let emailNotRegistered = await validateEmail(userDets.email);
    if (!emailNotRegistered) {
      return res.status(400).json({
        message: `Email is already registered.`,
        successs: false,
      });
    }

    // get the hashed password
    const password = await bcrypt.hash(userDets.password, 12);

    // create new user
    const newUser = new User({
      ...userDets,
      password,
      role,
    });
    await newUser.save();
    return res.status(201).json({
      message: "Hurry! now you are successfully registered. Please now login.",
      successs: true,
    });
  } catch (err) {
    console.log(err);
    //implement logger fucntion (winston)
    return res.status(500).json({
      message: "Unable to create your account.",
      successs: false,
    });
  }
};

const userLogin = async (userCreds, role, res) => {
  let { username, password } = userCreds;
  // first check if the username is in the datebase
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({
      message: "Username is not found. Invalid login credentials.",
      successs: false,
    });
  }
  // check the role
  if (user.role !== role) {
    return res.status(403).json({
      message: "Please make sure you are logging in from the right portal.",
      successs: false,
    });
  }
  // user existing and trying to signin from the right portal

  //check for the password
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    //sing in the token
    let token = jwt.sign(
      {
        user_id: user._id,
        role: user.role,
        username: user.username,
        email: user.email,
      },
      SECRET,
      { expiresIn: "7 days" }
    );
    let resault = {
      username: user.username,
      role: user.role,
      email: user.email,
      token: `Bearer ${token}`,
      expiresIn: 168,
    };
    return res.status(200).json({
      ...resault,
      message: "Hurrray! You are now logged in.",
      successs: true,
    });
  } else {
    return res.status(403).json({
      message: "Inccorect password",
      successs: false,
    });
  }
};

const validateUsername = async (username) => {
  let user = await User.findOne({ username });
  return user ? false : true;
};

const userAuth = passport.authenticate("jwt", { session: false });

const checkRole = (roles) => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();

const validateEmail = async (email) => {
  let user = await User.findOne({ email });
  return user ? false : true;
};

const serializeUser = (user) => {
  return {
    username: user.username,
    email: user.email,
    name: user.name,
    _id: user._id,
    updatedAt: user.updatedAt,
    createdAt: user.createdAt,
  };
};

module.exports = {
  userAuth,
  checkRole,
  userRegister,
  userLogin,
  serializeUser,
};
