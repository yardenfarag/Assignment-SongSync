import React from 'react'
import styles from './SongTr.module.scss'
import { Song } from '../models/song'

interface Props { 
    song: Song
}

export const SongTr: React.FC<Props> = ({song}) => {
    const {songName, band, year} = song
  return (
    <tr className={styles.tr}>
        <td className={styles.td}>{songName}</td>
        <td className={styles.td}>{band}</td>
        <td className={styles.td}>{year}</td>
    </tr>
  )
}
