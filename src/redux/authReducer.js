import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
  authentificated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => builder
})

export const authReducer = authSlice.reducer;