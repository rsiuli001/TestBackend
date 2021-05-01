// src/users/user.service.ts

/**
 * Data Model Interfaces
 */
import { User, UserBase, Users } from '../types/users';

/**
 * In-Memory Store
 */
let users: Users = {
  1: {
    id: 1,
    name: 'Person1',
    email: 'person1@abc.com',
    country: 'IN',
  },
  2: {
    id: 2,
    name: 'Person2',
    email: 'person2@abc.com',
    country: 'IN',
  },
  3: {
    id: 3,
    name: 'Person3',
    email: 'person3@abc.com',
    country: 'IN',
  },
};

/**
 * Service Methods
 */
export const findAll = async (): Promise<User[]> => Object.values(users);

export const find = async (id: number): Promise<User> => users[id];

export const create = async (newUser: UserBase): Promise<User> => {
  const newId = new Date().valueOf();
  users[newId] = {
    id: newId,
    ...newUser,
  };

  return users[newId];
};

export const update = async (id: number, userUpdate: UserBase): Promise<User | null> => {
  const user = await find(id);
  if (!user) {
    return null;
  }

  users[id] = { id, ...userUpdate };
  return users[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const user = await find(id);
  if (!user) {
    return null;
  }

  delete users[id];
};
