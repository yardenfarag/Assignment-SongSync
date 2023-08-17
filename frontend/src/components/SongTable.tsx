import React, { useEffect, useState } from 'react'
import { Song } from '../models/song'
import styles from './SongTable.module.scss'
import { SongTr } from './SongTr'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'

interface Props {
    data: Song[]
}

export const SongTable: React.FC<Props> = ({ data }) => {
    const columns = Object.keys(data[0]).filter(column => column !== 'id')
    const filterBy = useSelector((state: RootState) => state.song.filterBy)
    const [songs, setSongs] = useState<Song[]>([...data])

    useEffect(() => {
        let filteredSongs = [...data]

        if (filterBy.txt) {
            filteredSongs = filteredSongs.filter(s =>
                s.songName.includes(filterBy.txt) ||
                s.band.includes(filterBy.txt) ||
                s.year.includes(filterBy.txt)
            )
        }

        setSongs(filteredSongs)
    }, [data, filterBy.txt])

    const SortByHandler = (property: keyof Song, order: 'asc' | 'desc') => {
        let sortedSongs = [...songs].sort((a, b) => {
            if (order === 'asc') {
                return String(a[property]).localeCompare(String(b[property]))
            } else {
                return String(b[property]).localeCompare(String(a[property]))
            }
        })
        setSongs(sortedSongs)
    }

    return (
        <>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        {columns.map((column, index) => (
                            <th className={styles.th} key={index}>
                                <span className={styles.title}>
                                    <span onClick={() => SortByHandler(column as keyof Song, 'desc')} className={styles.span}>
                                        <ArrowUpward />
                                    </span>{column === 'songName' ? 'song name' : column}
                                    <span onClick={() => SortByHandler(column as keyof Song, 'asc')} className={styles.span}>
                                        <ArrowDownward />
                                    </span>
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {songs.map(song => <SongTr key={song.id} song={song} />)}
                </tbody>
            </table>
        </>
    )
}
