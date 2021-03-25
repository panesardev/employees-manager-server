import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './logger';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.enableCors();
  await app.listen(port);
  console.log(`Server started on PORT: ${port}`);
}
bootstrap();
