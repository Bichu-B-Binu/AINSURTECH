import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const register = async (req, res, next) => {
  const { empName, empId, password } = req.body;
  // console.log("Received request body:", req.body);

  // Check for required fields
  if (!empName || !empId || !password) {
    // return res.status(400).json({ message: "All fields are required" });
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
    res.json(newUser);
  } catch (error) {
    // console.error("Error while creating user:", error);
    // res.status(500).json({ message: error.message });
    next(error);
  }
};
