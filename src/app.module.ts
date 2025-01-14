import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { AppConfigModule } from './app-config/app-config.module';
import { SwaggerModuleConfig } from './swagger/swagger.module';

@Module({
  imports: [WeatherModule, AppConfigModule, SwaggerModuleConfig],
})
export class AppModule {}
