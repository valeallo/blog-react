import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    userInfo: null, 
    error: null,
    success: null
}

export const loggedInUser = createAsyncThunk( //è un metodo di reduce che gestisce le chiamate api
    'user/loggedInUser',
    async (data, { rejectWithValue }) => {
        return await axios
            .post(`http://localhost:3030/login`, data)
            .then((resp) => {
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
                state.error = action.payload.message
            })

    }})
export const loading = (state) => state.userData.loading
export const error = (state) => state.userData.error
export const userInfo = (state) => state.userData.userInfo
export const success = (state) => state.userData.success
export default loginSlice.reducer
 









// export const loggedInUser = createAsyncThunk(
//     'event/AddNewEvent',
//     async (data) => {
//         return await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/login`, {
//             method: 'POST',
//             headers: {
//                 "content-type": "application-json"
//             },
//             body: JSON.stringify(data)
//         })
//             .then((resp) => {
//                 console.log(resp.data)
//                 return resp.data
//             })
//             .catch((error) => {
//                 if (error) {
//                     console.log(error)
//                 }
                
//             })
//     })



// const loginSlice = createSlice({
//     name: 'userData',
//     initialState,
//     extraReducers: (builder) => { 
//         builder
//             .addCase(loggedInUser.pending, (state) => {
//                 state.loading = true
//                 state.error = null

//             })
//             .addCase(loggedInUser.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.error = null
//                 state.userInfo = action.payload
//                 state.success = "success"
//             })
//             .addCase(loggedInUser.rejected, (state, action) => {
//                 state.loading = false
//                 state.error = "errore"

//             })

//     }
// })


// export const loading = (state) => state.userData.loading
// export const error = (state) => state.userData.error
// export const user = (state) => state.userData.userInfo
// export const success = (state) => state.userData.success
// export default loginSlice.reducer