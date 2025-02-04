import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { SwaggerModuleConfig } from './swagger/swagger.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [WeatherModule, EnvModule, SwaggerModuleConfig],
})
export class AppModule {}
