import { Role } from './role';

export class User {
  constructor() {
    this.userId = '';
    this.userName = '';
    this.passWord = '';
    this.email = '';
    this.role = new Role();
  }
  userId: String;
  userName: String;
  passWord: String;
  email: String;
  role: Role;
}
