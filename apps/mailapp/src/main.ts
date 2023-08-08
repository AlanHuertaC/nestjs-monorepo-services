import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { MailappModule } from './mailapp.module';

async function bootstrap() {
  //Levantar de forma default el servicio
  /*const app = await NestFactory.create(MailappModule);
  await app.listen(3000);*/

  //Levantar el servicio empleando microservice de nestjs
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailappModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
