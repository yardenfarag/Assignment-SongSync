import { createSlice } from '@reduxjs/toolkit'
import { storageService } from '../services/storage.service'

const THEME_SETTINGS_KEY = 'themeSettings'

const initialSettingsState = { isDarkMode: false }


const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialSettingsState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
            if (state.isDarkMode) {
                storageService.store(THEME_SETTINGS_KEY, true)
            } else {
                storageService.store(THEME_SETTINGS_KEY, false)
            }
        }
    },
})

export const settingsActions = settingsSlice.actions

export default settingsSlice.reducer