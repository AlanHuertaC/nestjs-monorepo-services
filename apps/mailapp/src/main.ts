import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { MailappModule } from './mailapp.module';
import 'dotenv/config'

async function bootstrap() {
  //Levantar de forma default el servicio
  /*const app = await NestFactory.create(MailappModule);
  await app.listen(3000);*/

  //Levantar el servicio empleando microservice de nestjs
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailappModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.MICROSERVICE_MAIL_APP, //or 0.0.0.0 para que escuche sobre todas las interfaces de red de si misma
        port: parseInt(process.env.GATEWAY_IP_PORT)
      },
    },
  );
  await app.listen();
}
bootstrap();
