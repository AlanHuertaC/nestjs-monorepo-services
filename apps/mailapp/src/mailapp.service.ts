import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class MailappService {
  getHello(): string {
    return 'Hello World!';
  }

  handleEventNewEmail(data: any) {
    console.log('Este es el evento entrante!!!', data);
    const networkInterfaces = os.networkInterfaces();
    
    return { 
      "resultCode": "0",
      "resultMessage": "Operation success.",
      "networkInterfaces": networkInterfaces['eth0'],
      data 
    };
  }
}
