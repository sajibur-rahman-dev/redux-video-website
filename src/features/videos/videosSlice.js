

// initial state 

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

const initialState = {
    isLoading: false,
    videos: [],
    isError: false,
    error: "",
};


// async fetch videos 

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
    const videos = await getVideos();
    return videos;
});

// videos slice 

const videosSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = false;
                state.error = action.payload;
            })
    }
})


export default videosSlice.reducer;
