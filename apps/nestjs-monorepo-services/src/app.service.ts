import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MAIL_SERVICE') private clientMail: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  newUser(user: any): Object{
    console.log("emit- ", user);
    //this.clientMail.emit('new_email', user);
    const pattern = { cmd: 'new_email' };
    const payload = user;
    return this.clientMail.send<Object>(pattern, payload);
  }
}
