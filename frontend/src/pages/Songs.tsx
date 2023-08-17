import { useEffect } from 'react'
import { SongTable } from '../components/SongTable'
import styles from './Songs.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { getSongs } from '../store/song'
import { Header } from '../components/Header'
import { Loader } from '../components/Loader'
import { SongFilter } from '../components/SongFilter'

type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

export const Songs = () => {
    const dispatch: AppDispatch = useDispatch()
    const songsData = useSelector((state: RootState) => state.song.songs)
    const loading = useSelector((state: RootState) => state.song.loading)

    useEffect(() => {
        dispatch(getSongs())
    }, [])
    return (
        <>
            <Header />
            <main className={styles.main}>
                {!loading && <SongFilter />}
                {loading && <div className={styles.loading}><Loader /></div>}
                {songsData.length !== 0 && <SongTable data={songsData} />}
                {!songsData.length && !loading && <h1>NO MATCHES FOUND</h1>}
            </main>
        </>
    )
}
