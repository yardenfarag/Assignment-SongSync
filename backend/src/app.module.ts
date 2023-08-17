import { Module } from '@nestjs/common';
import { SongsModule } from './songs/songs.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [SongsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres-nest',
    autoLoadEntities: true,
    synchronize: true
  })],
})
export class AppModule {}
