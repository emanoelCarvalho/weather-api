import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModuleConfig } from './swagger/swagger.module';
import { EnvService } from './env/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(EnvService);
  const PORT = configService.getPort;

  SwaggerModuleConfig.setup(app);

  await app.listen(PORT);
}
bootstrap();
