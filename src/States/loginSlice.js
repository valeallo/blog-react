import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    userInfo: null, 
    error: null,
    success: null
}

export const loggedInUser = createAsyncThunk( 
    'user/loggedInUser',
    async (data, { rejectWithValue }) => {
        return await axios
            .post(`${process.env.REACT_APP_SERVER_BASE_URL}/login`, data)
            .then((resp) => {
                localStorage.setItem('user', JSON.stringify(resp.data))
                return resp.data
            })
            .catch((error) => {
                return rejectWithValue(error)
            })
    }
)



const loginSlice = createSlice({
    name: 'userLogin',
    initialState,
    extraReducers: (builder) => { 
        builder
            .addCase(loggedInUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loggedInUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false
                state.error = null
                state.userInfo = action.payload
                state.success = action.payload.message
            })
            .addCase(loggedInUser.rejected, (state, action) => {
                console.log(action.payload)
                state.loading = false
                state.error = action.payload
            })

    }})
export const loading = (state) => state.userData.loading
export const error = (state) => state.userData.error
export const userInfo = (state) => state.userData.userInfo
export const success = (state) => state.userData.success
export default loginSlice.reducer