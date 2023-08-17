import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Song } from './song.entity'
import { Repository } from 'typeorm'
import * as fs from 'fs'
import * as csvParser from 'csv-parser'

const dirName = './src/songs/data/F-S Test - T02 - 2023 - Song_list.csv'

@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Song)
        private songRepository: Repository<Song>
    ) {
        this.songRepository.clear()
        this.loadSongsFromCSV()
    }

    private loadSongsFromCSV() { // Reads a CSV file, transforms words to lowercase, and stores them in the database.
        try {

            fs.createReadStream(dirName)
            .pipe(csvParser({
                separator: ';',
                mapHeaders: ({ header, index }) => header.toLowerCase()
            }))
            .on('data', async (row) => {
                const song = new Song()
                song.songName = row['song name'].toLowerCase()
                song.band = row['band'].toLowerCase()
                song.year = row['year']
                await this.songRepository.save(song)
            })
            .on('end', () => {
                console.log('CSV file successfully processed')
            })
        }
        catch (error) {
            console.error('Error reading csv file: ', error)
        }
    }

    async getAllSongs(): Promise<Song[]> { // Getting all songs from the database
        try {
            return this.songRepository.find({
                order: {
                    band: 'ASC'
                },
            });
        } catch (error) {   
            console.error('Error getting all songs: ', error)
        }
    }
}
