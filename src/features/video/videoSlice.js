// initial state 

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

const initialState = {
    isLoading: false,
    video: {},
    isError: false,
    error: "",
};


// async fetch videos 

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const video = await getVideo(id);
    return video;
});

// videos slice 

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            });

            builder.addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            });

            builder.addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = [];
                state.isError = true;
                state.error = action.error.message;
            })
    }
})


export default videoSlice.reducer;
