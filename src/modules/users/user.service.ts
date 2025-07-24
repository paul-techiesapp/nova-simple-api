import User from "../../models/User";
import { getUsers } from "./user.data";
import { User as UserInterface } from "./user.interface";

export class UserService {
  async getAllUsers(): Promise<User[] | UserInterface[]> {
    try {
      return await User.findAll();
    } catch (error) {
      console.log('Database unavailable, using fallback data');
      return getUsers();
    }
  }

  async getUserById(id: number): Promise<User | UserInterface | null> {
    try {
      return await User.findByPk(id);
    } catch (error) {
      console.log('Database unavailable, using fallback data');
      return getUsers().find((user) => user.id === id) || null;
    }
  }
}
