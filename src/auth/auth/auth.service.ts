import { Injectable } from '@nestjs/common';

const users = [
  {
    id: 1,
    username: 'user1@user.com',
    password: '$2b$10$A9H5fq4e9pptP9Yl52rZAOdqfTl1Rc/OOVXjV7ZssEVMzVZgSwuGS', //12345678
  },
  {
    id: 2,
    username: 'user2@user.com',
    password: '$2b$10$kcozwKSo8rdlXY8RapQLSOc3mRLqY/ilSQI2dyqOAX7jbnty4me3i', //12345678
  },
  {
    id: 3,
    username: 'user3@user.com',
    password: '$2b$10$H/kEo6UekZ7m7EqwQSJvOuv75S.IR5N0T6AFbJOoAD235OXvvnQgq', //12345678
  },
];

@Injectable()
export class AuthService {
  login(username: string, password: string) {
    console.log(username, password);
  }
}
