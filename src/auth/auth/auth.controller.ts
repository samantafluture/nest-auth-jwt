import { RoleGuard } from './../role.guard';
import { JwtGuard } from './jwt.guard';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    return { token: this.authService.login(body.username, body.password) };
  }

  @Role('admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Get('test')
  test(@Req() req) {
    console.log(req.user);
    return {
      name: 'Samanta Fluture',
    };
  }

  @UseGuards(JwtGuard)
  @Get('user')
  user(@Req() req) {
    return req.user;
  }
}
