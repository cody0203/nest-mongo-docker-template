import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  helloWorld() {
    return 'Welcome to Nest!!!';
  }
}
