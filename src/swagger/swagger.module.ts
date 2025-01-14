import { INestApplication, Module } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Module({})
export class SwaggerModuleConfig {
  static setup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Weather API')
      .setDescription('Weather API description for developers')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
