import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from '../dtos';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    this.authService.login(dto);
  }
}
