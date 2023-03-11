import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  getTags } from "./tagsAPI";

const initialState = {
    isLoading: false,
    tags: [],
    isError: false,
    error: "",
};


// async fetch videos 

export const fetchTags = createAsyncThunk("videos/fetchVideos", async () => {
    const tags = await getTags();
    return tags;
});

// videos slice 

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            });

            builder.addCase(fetchTags.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tags = action.payload;
            });

            builder.addCase(fetchTags.rejected, (state, action) => {
                state.isLoading = false;
                state.tags = [];
                state.isError = true;
                state.error = action.error.message;
            })
    }
})


export default tagsSlice.reducer;
