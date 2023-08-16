import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices/module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport } from '@nestjs/microservices';
import 'dotenv/config'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MAIL_SERVICE',
        transport: Transport.TCP,
        options: {
          host: "mail-app", //ip  del servicio a conectarse
          port: 3000
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
