import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getHomeMessage() {
    return 'Welcome to my Movie API';
  }
}
