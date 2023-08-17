import React from 'react'
import { useDispatch } from "react-redux"
import { songActions } from "../store/song"
import styles from './SongFilter.module.scss'


export const SongFilter = () => {
    const dispatch = useDispatch()
    const filterByHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(songActions.setFilterBy(ev.target.value))
    }
  return (
    <div className={styles.filter}>
        <input className={styles.input} type="text" placeholder="Search..." onChange={filterByHandler} />
    </div>
  )
}
