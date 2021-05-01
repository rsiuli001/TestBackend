export interface User extends UserBase {
  id: number;
}

export interface Users {
  [key: string]: User;
}

export interface UserBase {
  name: string;
  email: string;
  country: string;
}
