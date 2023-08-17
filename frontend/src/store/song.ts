import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { songService } from '../services/song.service'
import { Song } from '../models/song'

const initialPriceState = { songs: [] as Song[] , loading: false, error: false, filterBy: {txt: ''} }

export const getSongs = createAsyncThunk('price', async () => {
    try {
        return songService.getSongs()
    } catch (error) {
        throw new Error('Something went wrong: ' + error)
    }
})


const songSlice = createSlice({
    name: 'price',
    initialState: initialPriceState,
    reducers: {
        setFilterBy: (state, action: PayloadAction<string>) => {
            state.filterBy.txt = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSongs.fulfilled, (state, action) => {
                state.songs = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(getSongs.pending, (state) => {
                state.songs = []
                state.loading = true
                state.error = false
            })
            .addCase(getSongs.rejected, (state) => {
                state.songs = []
                state.loading = false
                state.error = true
            })
    }
})

export const songActions = songSlice.actions

export default songSlice.reducer