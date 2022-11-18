import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    favoriteList: [],
    totalFavorite: 0
}


export const favoriteSlice = createSlice({
    name:'favorites',
    initialState,
    reducers: {
        insertInFavorite:(state, action) => {
            state.totalFavorite += 1
            state.favoriteList.push(action.payload)
        },
        resetFavorite:(state) => {
            state.totalFavorite = 0
            state.favoriteList = []
        }

    }
})

export const {insertInFavorite} = favoriteSlice.actions
export const {resetFavorite} = favoriteSlice.actions
export const favorite = (state) => state.favorites.favoriteList
export const favoriteCount = (state) => state.favorites.totalFavorite
export default favoriteSlice.reducer