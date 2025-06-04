import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestAppErrorFilter } from '@nurhanna01/error-kit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new NestAppErrorFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
