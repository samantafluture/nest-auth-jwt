import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const users = [
  {
    id: 1,
    username: 'user1@user.com',
    password: '$2b$10$A9H5fq4e9pptP9Yl52rZAOdqfTl1Rc/OOVXjV7ZssEVMzVZgSwuGS', //12345678
    role: 'admin',
  },
  {
    id: 2,
    username: 'user2@user.com',
    password: '$2b$10$kcozwKSo8rdlXY8RapQLSOc3mRLqY/ilSQI2dyqOAX7jbnty4me3i', //12345678
    role: 'user',
  },
  {
    id: 3,
    username: 'user3@user.com',
    password: '$2b$10$H/kEo6UekZ7m7EqwQSJvOuv75S.IR5N0T6AFbJOoAD235OXvvnQgq', //12345678
    role: 'user',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(username: string, password: string) {
    const user = this.validateCredentials(username, password);

    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }

  validateCredentials(username: string, password: string) {
    const user = users.find(
      (u) =>
        u.username === username && bcrypt.compareSync(password, u.password),
    );
    return user;
  }
}
