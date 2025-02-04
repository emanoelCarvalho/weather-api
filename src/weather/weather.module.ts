import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { EnvModule } from 'src/env/env.module';
@Module({
  imports: [EnvModule],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
