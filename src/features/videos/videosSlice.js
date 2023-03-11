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
            });

            builder.addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            });

            builder.addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error.message;
            })
    }
})


export default videosSlice.reducer;
