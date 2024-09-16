import User from '../models/userModel.js'

const getAllUsers = async (req, res) => {
  const users = await User.find()

  res.json("users",users)
}

export {getAllUsers}