import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AppConfigService } from 'src/app-config/app-config.service';
@Injectable()
export class WeatherService {
  constructor(private readonly configService: AppConfigService) {}

  private readonly apiKey = this.configService.getApiKey
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  async getWeather(city: string): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          q: city, 
          appid: this.apiKey, 
          units: 'metric'
        }, 
      }); 
      return response.data
    } catch (error) {
      throw new Error("Error fetching weather data.")
    }
  }
}
