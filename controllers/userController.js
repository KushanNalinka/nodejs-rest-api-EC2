// const User = require("../models/user");

// const createNewUser = async (req, res, next) => {
//   try {
//     const { name, email } = req.body;
//     if (!name || !email) {
//       res.status(400);
//       return next(new Error("name & email fields are required"));
//     }

//     // check if user already exists
//     const isUserExists = await User.findOne({ email });

//     if (isUserExists) {
//       res.status(404);
//       return next(new Error("User already exists"));
//     }

//     const user = await User.create({
//       name,
//       email,
//     });

//     res.status(200).json({
//       success: true,
//       user,
//       message: "User created successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return next(error);
//   }
// };

// const getAllUsers = async (req, res, next) => {
//   try {
//     const users = await User.find();

//     res.status(200).json({
//       success: true,
//       users,
//     });
//   } catch (error) {
//     console.log(error);
//     return next(error);
//   }
// };

// module.exports = {
//   createNewUser,
//   getAllUsers,
// };


import User from "../models/user.js";

export const createNewUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400);
      return next(new Error("Name & Email fields are required"));
    }

    // Check if user already exists
    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      res.status(409); // 409 Conflict
      return next(new Error("User already exists"));
    }

    const user = await User.create({ name, email });

    res.status(201).json({
      success: true,
      user,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};
