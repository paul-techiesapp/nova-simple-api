import { RequestHandler } from "express";
import { UserService } from "./user.service";

const userService = new UserService();

export const getAllUsers: RequestHandler = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
};

export const getUserById: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const user = await userService.getUserById(parseInt(req.params.id));
    if (!user) {
      res.status(404).json({
        message: "User not found"
      });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
};

