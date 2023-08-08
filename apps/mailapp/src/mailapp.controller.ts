import { Controller, Get } from '@nestjs/common';
import { MailappService } from './mailapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MailappController {
  constructor(private readonly mailappService: MailappService) {}

  @Get()
  getHello(): string {
    return this.mailappService.getHello();
  }

  @EventPattern('new_email')
  handleNewEmail(data: any) {
    return this.mailappService.handleEventNewEmail(data);
  }
}
