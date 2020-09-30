import { Controller, Get, Res, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  @HttpCode(200)
  helloWorld() {
    const txt = this.appService.helloWorld();
    return txt;
  }
}
