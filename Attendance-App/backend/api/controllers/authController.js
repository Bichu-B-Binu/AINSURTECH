import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const { empName, empId, password } = req.body;
  // console.log("Received request body:", req.body);

  // Check for required fields
  if (!empName || !empId || !password) {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    // Check if a user with the same empId already exists
    // const existingUser = await User.findOne({ empId });
    // if (existingUser) {
    //   return res.status(400).json({ message: "Employee ID already exists" });
    // }

    //Create hash password
    const hashPassword = bcryptjs.hashSync(password, 10);

    // Create a new user
    const newUser = new User({
      empName,
      empId,
      password: hashPassword,
    });

    await newUser.save();
    // console.log("User created successfully:", newUser);
    console.log("User created successfully:");
    res.json(newUser);
  } catch (error) {
    // console.error("Error while creating user:", error);
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { empId, password } = req.body;

  // Check for required fields
  if (!empId || !password) {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validEmpId = await User.findOne({ empId });
    if (!validEmpId) {
      return next(errorHandler(404, "Employee not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validEmpId.password);

    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const { password: pass, ...rest } = validEmpId._doc;

    const token = jwt.sign({ id: validEmpId._id }, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
