import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Injectable()
export class MailappService {
  getHello(): string {
    return 'Hello World!';
  }

  handleEventNewEmail(data: any) {
    console.log('Este es el evento entrante!!!', data);
  }
}
