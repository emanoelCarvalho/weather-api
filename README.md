# Weather API

## Descrição
A **Weather API** é um projeto desenvolvido em NestJS que permite consultar o clima de qualquer cidade em tempo real, consumindo dados de APIs externas como a OpenWeatherMap. Esta API é ideal para ser usada em sistemas que precisam de informações meteorológicas atualizadas.

## Recursos
- Consulta de clima de qualquer cidade.
- Integração com APIs externas para obtenção de dados meteorológicos.
- Respostas formatadas com informações relevantes, como temperatura, umidade e descrição do tempo.

## Tecnologias Utilizadas
- **NestJS**: Framework backend modular e escalável.
- **Axios**: Biblioteca para requisições HTTP.
- **OpenWeatherMap API**: Serviço de dados meteorológicos.
- **@nestjs/config**: Gerenciamento de variáveis de ambiente.

## Instalação e Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/emanoelCarvalho/weather-api.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd weather-api
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   OPENWEATHERMAP_API_KEY=your-api-key-here
   ```
   Substitua `your-api-key-here` pela sua chave de API da OpenWeatherMap.

5. Inicie o servidor:
   ```bash
   npm run start
   ```

## Endpoints
### Consulta de Clima
**GET** `/weather/:city`

#### Parâmetros:
- `city`: Nome da cidade que deseja consultar (string).

#### Exemplo de Requisição:
```bash
GET http://localhost:3000/weather/London
```

#### Exemplo de Resposta:
```json
{
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 15.32,
    "feels_like": 14.56,
    "temp_min": 13.89,
    "temp_max": 16.67,
    "pressure": 1023,
    "humidity": 62
  },
  "name": "London"
}
```

## Estrutura do Projeto
```
weather-api/
├── src/
│   ├── app.module.ts
│   ├── weather/
│   │   ├── weather.module.ts
│   │   ├── weather.service.ts
│   │   └── weather.controller.ts
├── .env
├── package.json
└── README.md
```

## Contato
Se tiver dúvidas ou sugestões, entre em contato:
- **LinkedIn**: [linkedin.com/in/emanoelcarvalho/](https://www.linkedin.com/in/emanoelcarvalho/)
- **GitHub**: [github.com/emanoelCarvalho](https://github.com/emanoelCarvalho)
- **E-mail**: hemanoel718@gmail.com

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

