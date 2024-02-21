import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: 'user',
    initialState: { name: "Kim", age: 20 },
    reducers: {
        // state update function
        changName(state){
            return 'John ' + state;
        },
        changAge(state, num){
            state.age += num.payload;
        }
    }
})

export let { changName, changAge } = user.actions

export default user;