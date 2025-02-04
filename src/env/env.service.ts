import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly config: ConfigService) {}

  get getPort(): number {
    return this.config.get<number>('PORT');
  }

  get getApiKey(): string {
    return this.config.get<string>('OPENWEATHERMAP_API_KEY');
  }

  get getApiUrl(): string {
    return this.config.get<string>('OPENWEARTHERMAP_API_URL');
  }
}
