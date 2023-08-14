import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: null,
  isLoading: false,
  error: null,
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => builder,
});

export const contactsReducer = contactsSlice.reducer;