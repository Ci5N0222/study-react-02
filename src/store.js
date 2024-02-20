import { configureStore, createSlice } from "@reduxjs/toolkit";

/**
 * Redux를 쓰는 이유
 * 컴포넌트 간 state 공유가 편해진다.
 */

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