import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WeatherModule } from './weather/weather.module';
import { AppConfigModule } from './app-config/app-config.module';

@Module({
  imports: [WeatherModule, AppConfigModule],
  controllers: [AppController],
})
export class AppModule {}
