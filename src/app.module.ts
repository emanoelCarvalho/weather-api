import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { AppConfigModule } from './app-config/app-config.module';
import { SwaggerModule } from './swagger/swagger.module';

@Module({
  imports: [WeatherModule, AppConfigModule, SwaggerModule],
})
export class AppModule {}
