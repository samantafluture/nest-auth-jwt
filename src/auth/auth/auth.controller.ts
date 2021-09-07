import { JwtGuard } from './jwt.guard';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    return { token: this.authService.login(body.username, body.password) };
  }

  @UseGuards(JwtGuard)
  @Get('test')
  test() {
    return {
      name: 'Samanta Fluture',
    };
  }
}
