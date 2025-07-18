import { RequestHandler } from "express";
import { UserService } from "./user.service";

const userService = new UserService();

export const getAllUsers: RequestHandler = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
  return;
}

export const getUserById: RequestHandler<{ id: string }> = (req, res) => {
  const user = userService.getUserById(parseInt(req.params.id));
  if (!user) {
    res.status(404).json({
      message: "User not found"
    });
    return;
  }
  res.json(user);
  return;
}

