import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});


export const setToken = token => {
  instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers['Authorization'] = '';
};

export const registerUserThunk = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', userData);
      console.log("🚀 ~ file: operations.js:22 ~ data:", data)
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', userData);
      console.log("🚀 ~ file: operations.js:37 ~ data:", data)
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


    export const refreshUserThunk = createAsyncThunk(
      'auth/refreshUser',
      async (_, thunkApi) => {
        const state = thunkApi.getState();
        const token = state.auth.token;
        if (!token) return thunkApi.rejectWithValue(null);

        try {
          setToken(token);
          const { data } = await instance.get('/users/current');
          console.log("🚀 ~ file: operations.js:53 ~ data:", data)

          return data;
          
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);
        }
      }
    );


    export const logoutUserThunk = createAsyncThunk(
      'auth/logout',
      async (_, thunkApi) => {
        try {
          const { data } = await instance.post('/users/logout');
          console.log("🚀 ~ file: operations.js:69 ~ data:", data)
          clearToken();

          return data;
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);
        }
      }
    );