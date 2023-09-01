import { Controller, Get } from '@nestjs/common';
import { MailappService } from './mailapp.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class MailappController {
  constructor(private readonly mailappService: MailappService) {}

  @Get()
  getHello(): string {
    return this.mailappService.getHello();
  }

  //@EventPattern('new_email')
  @MessagePattern({ cmd: 'new_email' })
  handleNewEmail(data: any) {
    return this.mailappService.handleEventNewEmail(data);
  }
}
