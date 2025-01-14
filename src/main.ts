import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './app-config/app-config.service';
import { DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Weather API')
  .setDescription('Weather API description for developers')
  .setVersion('1.0')
  .build();
  const configService = app.get(AppConfigService);
  const PORT = configService.getPort;
  
  await app.listen(PORT);
}
bootstrap();
