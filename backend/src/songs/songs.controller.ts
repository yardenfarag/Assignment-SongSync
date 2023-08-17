import { Controller, Get, InternalServerErrorException, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './song.entity';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) { }

    @Get()
    async getSongs(): Promise<Song[]> {
        try {
            return await this.songsService.getAllSongs()
        } catch (error) {
            throw new InternalServerErrorException('An error occurred while fetching songs')
        }
    }
}
