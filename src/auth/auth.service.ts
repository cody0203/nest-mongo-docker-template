import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import LoginDto from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginData: LoginDto) {
    const { email, password } = loginData;

    if (email !== 'example@gmail.com' || password !== 'example123') {
      throw new UnauthorizedException();
    }

    const payload = { sub: email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
