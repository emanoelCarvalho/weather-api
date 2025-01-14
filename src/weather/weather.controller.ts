import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  @ApiOperation({ summary: 'Get weather by city' })
  @ApiResponse({
    status: 200,
    description: 'Weather data for a given city',
    schema: {
      type: 'object',
      properties: {
        coord: {
          type: 'object',
          properties: {
            lon: { type: 'number', example: -97.4003 },
            lat: { type: 'number', example: 35.5501 },
          },
        },
        weather: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number', example: 600 },
              main: { type: 'string', example: 'Snow' },
              description: { type: 'string', example: 'light snow' },
              icon: { type: 'string', example: '13n' },
            },
          },
        },
        base: { type: 'string', example: 'stations' },
        main: {
          type: 'object',
          properties: {
            temp: { type: 'number', example: -1.41 },
            feels_like: { type: 'number', example: -7.82 },
            temp_min: { type: 'number', example: -1.89 },
            temp_max: { type: 'number', example: -0.57 },
            pressure: { type: 'number', example: 1021 },
            humidity: { type: 'number', example: 94 },
            sea_level: { type: 'number', example: 1021 },
            grnd_level: { type: 'number', example: 976 },
          },
        },
        visibility: { type: 'number', example: 10000 },
        wind: {
          type: 'object',
          properties: {
            speed: { type: 'number', example: 7.2 },
            deg: { type: 'number', example: 350 },
          },
        },
        snow: {
          type: 'object',
          properties: {
            '1h': { type: 'number', example: 0.18 },
          },
        },
        clouds: {
          type: 'object',
          properties: {
            all: { type: 'number', example: 100 },
          },
        },
        dt: { type: 'number', example: 1736514884 },
        sys: {
          type: 'object',
          properties: {
            type: { type: 'number', example: 2 },
            id: { type: 'number', example: 2084544 },
            country: { type: 'string', example: 'US' },
            sunrise: { type: 'number', example: 1736516352 },
            sunset: { type: 'number', example: 1736552093 },
          },
        },
        timezone: { type: 'number', example: -21600 },
        id: { type: 'number', example: 4544356 },
        name: { type: 'string', example: 'Oklahoma' },
        cod: { type: 'number', example: 200 },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: { type: 'string', example: 'Invalid city name' },
        error: { type: 'string', example: 'Bad Request' },
      },
    },
  })
  async getWeather(@Param('city') city: string) {
    if (!city || typeof city !== 'string') {
      throw new BadRequestException('Invalid city name');
    }
    return this.weatherService.getWeather(city);
  }
}
