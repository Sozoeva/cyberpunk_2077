import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk(
  "getNews",
  async (state, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/news`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const newsSlice = createSlice({
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
        console.log(action);
        state.news = action.payload;
        console.log("Все ок");
      },
  },
});