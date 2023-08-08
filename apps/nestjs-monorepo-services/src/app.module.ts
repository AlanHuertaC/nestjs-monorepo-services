import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices/module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MAIL_SERVICE',
        transport: Transport.TCP,
        /*options: {
          host: 'http://127.0.0.1',
        },*/
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
