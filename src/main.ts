import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  app.use(helmet());
  app.enableCors(
    {
      origin:['server.dailydash.co.za',
        'http://localhost:3000',
      'dailydash.co.za']
    }
  );
  await app.listen(4000);
}
bootstrap();
