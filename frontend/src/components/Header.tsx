
import styles from './Header.module.scss'
import { RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { settingsActions } from '../store/settings'

export const Header = () => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector((state:RootState) => state.settings.isDarkMode)

  const toggleThemeHandler = () => {
    dispatch(settingsActions.toggleTheme())
}
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>SongSync</h1>
      <h3 className={styles.h3}>Melodic Database Manager</h3>
      <button onClick={toggleThemeHandler} className={styles.button}>{isDarkMode ? '🔆' : '🌙'}</button>
    </header>
  )
}
