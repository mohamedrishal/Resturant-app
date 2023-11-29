import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call - createAsyncThunk
export const fetchRestuarant = createAsyncThunk('restuarantList/fetchRestuarant',()=>{
    // api call 
    return axios.get('/restaurants.json').then(response=>response.data.restaurants)
})

const restuarantSlice = createSlice({
    name:'restuarantList',
    initialState:{
        loading:false,
        allRestuarant:[],
        allRestuarantContainer:[],
        error:''
    },

    reducers:{
        searchRestuarant : (state,action)=>{
         state.allRestuarant = state.allRestuarantContainer.filter((item=>item.neighborhood.toLowerCase().includes(action.payload)))
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchRestuarant.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestuarant.fulfilled,(state,action)=>{
            state.loading=false
            state.allRestuarant = action.payload
            state.allRestuarantContainer= action.payload
            state.error=""
        })
        builder.addCase(fetchRestuarant.rejected,(state,action)=>{
            state.loading=false
            state.allRestuarant = []
            state.error=action.error.message
        })
    }
})

export const {searchRestuarant} = restuarantSlice.actions
export default restuarantSlice.reducer