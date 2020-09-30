import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  constructor() {}

  sayHello() {
    return 'Example route!';
  }

  guardExample() {
    return 'This is guard route';
  }
}
