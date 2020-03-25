import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('Bootsrap');
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);

  logger.log(`application is listening on port ${port}`)
}
bootstrap();
