import {createSlice} from '@reduxjs/toolkit'

type initialStateType = {
    mode: string,
    userId: string
}

type stateSelectorType = {
    mode: {
        mode: string,
        userId: string
    }
}

const initialState: initialStateType = {
    mode: 'dark',
    userId: '63701cc1f03239b7f700000e'
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

export const selectMode = (state: stateSelectorType) => state.mode.mode
export const selectUserId = (state: stateSelectorType) => state.mode.userId

export default globalSlice.reducer