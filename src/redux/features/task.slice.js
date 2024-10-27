import { createSlice } from "@reduxjs/toolkit";
import {
  AddTask,
  DeleteTask,
  GetALlTask,
  UpdateStatus,
  UpdateTask,
} from "./task.action";

const taskslice = createSlice({
  name: "tasks",
  initialState: {
    alltasks: [],
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(GetALlTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetALlTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.alltasks = payload;
      })
      .addCase(GetALlTask.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(AddTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.alltasks = payload.data;
      })
      .addCase(AddTask.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteTask.fulfilled, (state, { payload }) => {
        console.log(payload, "slice");
        state.isLoading = false;
        state.alltasks = payload.data;
      })
      .addCase(DeleteTask.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateTask.fulfilled, (state, { payload }) => {
        console.log(payload, "slice");
        state.isLoading = false;
        state.alltasks = payload.data;
      })
      .addCase(UpdateTask.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateStatus.fulfilled, (state, { payload }) => {
        console.log(payload, "slice");
        state.isLoading = false;
        state.alltasks = payload.data;
      })
      .addCase(UpdateStatus.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export const taskReducer = taskslice.reducer;
