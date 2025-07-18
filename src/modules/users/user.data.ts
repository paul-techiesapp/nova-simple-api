import { User } from "./user.interface";

let users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@gmail.com"
    }
];

export const getUsers = () => users;
export const setUsers = (newUsers: User[]) => {
    users = newUsers;
}