import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const corsOptions: CorsOptions = {
    origin: 'https://songsync.onrender.com',
    methods: 'GET',
    credentials: true,
  };
  app.enableCors(corsOptions)

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
