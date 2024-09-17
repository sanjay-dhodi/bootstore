import dotenv from "dotenv";
dotenv.config();
import { userModel } from "../models/userModel.js";
import { createError } from "../utility/cusomError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, resp, next) => {
  try {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 12);

    const user = new userModel({
      username: username,
      password: hash,
    });

    const saveUser = await user.save();
    resp.status(200).json(saveUser);
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, resp, next) => {
  try {
    const { username, password } = req.body;
    const foundUser = await userModel.findOne({ username: username });

    if (!foundUser) {
      return next(createError(404, "user not found "));
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordMatch) {
      return next(createError(401, "wrong password"));
    }

    const token = jwt.sign({ name: "sanjay" }, process.env.JWT_SECRETE, {
      expiresIn: process.env.JWT_EXPIRY,
    });

    resp.status(200).json(token);
  } catch (error) {
    next(error);
  }
};
