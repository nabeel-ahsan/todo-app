const route = require("express").Router();
const { User } = require("../model/model");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

const JWTSECRET = "1234abcd";
route.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.create({ username, password });
    const token = jwt.sign({ userId: user._id }, JWTSECRET);
    res.status(200).json({
      token: token,
    });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

route.post("/signin", authMiddleware,function (req, res) {
  try {
    const token = jwt.sign({ userId: req.userId }, JWTSECRET);
    res.status(200).json({
      token: token,
    });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = route;
