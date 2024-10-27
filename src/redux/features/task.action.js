import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

export const GetALlTask = createAsyncThunk("user/tasks", async () => {
  try {
    const { data } = await api.get("/tasks");
    // if (data?.status == 200) {
    //   toast.success(data.data?.msg);
    // } else {
    //   toast.info(data.msg?.msg);
    //   window.alert(data.msg?.msg);
    // }

    return data?.data;
  } catch (error) {
    console.error(error);
  }
});

export const AddTask = createAsyncThunk("user/add/task", async (payload) => {
  try {
    const data = await api.post("/tasks", { ...payload });
    if (data?.status == 201) {
      alert(data.msg);
    } else {
      //   toast.info(data.msg?.msg);
      //   window.alert(data.msg?.msg);
    }
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
  }
});

export const DeleteTask = createAsyncThunk(
  "user/delete/task",
  async (payload) => {
    console.log(payload, "id");
    try {
      const data = await api.delete("/tasks", { payload });
      if (data?.status === 201) {
        alert(data.msg);
      } else {
        //   toast.info(data.msg?.msg);
        //   window.alert(data.msg?.msg);
      }
      console.log(data);
      return data?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const UpdateTask = createAsyncThunk(
  "user/update/task",
  async (payload) => {
    try {
      const data = await api.put("/tasks", { ...payload });
      if (data?.status == 201) {
        alert(data.msg);
      } else {
        //   toast.info(data.msg?.msg);
        //   window.alert(data.msg?.msg);
      }
      return data?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const UpdateStatus = createAsyncThunk(
  "user/update-status/task",
  async (payload) => {
    try {
      const data = await api.patch("/tasks", { ...payload });
      if (data?.status == 201) {
        alert(data.msg);
      } else {
        //   toast.info(data.msg?.msg);
        //   window.alert(data.msg?.msg);
      }
      return data?.data;
    } catch (error) {
      console.log(error);
    }
  }
);
