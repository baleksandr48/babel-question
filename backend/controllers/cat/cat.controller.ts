import { Controller, Get } from '@nestjs/common';

@Controller()
export class CatController {
  @Get('cats')
  getCats() {
    return 'Bob cat';
  }
}
