import { configureStore } from '@reduxjs/toolkit'

import settingsReducer from './settings'
import songReducer from './song'

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        song: songReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>