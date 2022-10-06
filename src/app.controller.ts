import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_transaction')
  async getTransaction(transId: string){
    return this.appService.getTransaction(transId);
  }
}
