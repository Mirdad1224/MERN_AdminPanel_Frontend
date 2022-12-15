import {createSlice} from '@reduxjs/toolkit'

type initialStateType = {
    mode: string,
    userId: string
}

const initialState: initialStateType = {
    mode: 'dark',
    userId: ''
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        } 
    }
})

export const {setMode} = globalSlice.actions

export const selectMode = (state: initialStateType) => state.mode
export const selectUserId = (state: initialStateType) => state.userId

export default globalSlice.reducer