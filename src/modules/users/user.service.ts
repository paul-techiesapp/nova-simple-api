import { getUsers } from "./user.data";
import { User } from "./user.interface";

export class UserService {
  getAllUsers(): User[] {
    return getUsers();
  }

  getUserById(id: number): User | undefined {
    return getUsers().find((user) => user.id === id);
  }
}
