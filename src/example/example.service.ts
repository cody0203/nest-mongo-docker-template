import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  constructor() {}

  sayHello() {
    return 'Hello Nest!';
  }

  guardExample() {
    return 'This is guard route';
  }
}
