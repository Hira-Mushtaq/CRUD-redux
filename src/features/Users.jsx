import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { UsersData } from '../FakeData'

const userSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action) => {
            //write a code for adding users
            state.value.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        updateUser: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            })
        }

    }
})
export const { addUser, deleteUser,updateUser } = userSlice.actions;
export default userSlice.reducer;



