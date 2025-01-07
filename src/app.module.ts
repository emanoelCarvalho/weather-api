import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { AppConfigModule } from './app-config/app-config.module';

@Module({
  imports: [WeatherModule, AppConfigModule],
})
export class AppModule {}
