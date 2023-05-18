import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      name: "bruna",
      email: "brunalima@gmail.com",
      password: "123456bruna"
    },
    {
      id: 2,
      name: "brenda",
      email: "brendalima@gmail.com",
      password: "123456brenda"
    }
  ]

  constructor() { }

  getUsers() {
    return this.users
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users.find((user) => user.email === email && user.password === password)
  }

}
