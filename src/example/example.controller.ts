import { Controller, Get, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from 'src/guards/authentication.guard';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @Get()
  sayHello(@Res() res) {
    const txt = this.exampleService.sayHello();
    return res.status(HttpStatus.OK).json(txt);
  }

  @Get('guard')
  @UseGuards(AuthenticationGuard)
  guardExample(@Res() res) {
    const txt = this.exampleService.guardExample();
    return res.status(HttpStatus.OK).json(txt);
  }
}
