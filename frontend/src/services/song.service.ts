import axios from 'axios'
import { Song } from '../models/song'

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '//localhost:3000/'

export const songService = {
    getSongs
}

async function getSongs(): Promise<Song[]> {
    try {   
        let res = await axios.get(BASE_URL + 'songs')    
        return res.data
    } catch (error) {
        throw new Error('Had trouble GETting songs from the backend: ' + error)
    }
}