import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './app-config/app-config.service';
import { SwaggerModuleConfig } from './swagger/swagger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(AppConfigService);
  const PORT = configService.getPort;

  SwaggerModuleConfig.setup(app);

  await app.listen(PORT);
}
bootstrap();
