import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: 'user',
    initialState: 'Kim',
    reducers: {
        // state update function
        changName(state){
            return 'John ' + state;
        }
    }
})

export let { changName } = user.actions

let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ]
})

export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
    }
})