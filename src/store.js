import { configureStore, createSlice } from "@reduxjs/toolkit";

import user from './store/userSlice.js';

/**
 * Redux를 쓰는 이유
 * 컴포넌트 간 state 공유가 편해진다.
 */

let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id: 1, name: 'Red Knit', count : 1},
      {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers: {
        addCount(state, id) {
            let index = state.findIndex((obj)=>{ return obj.id === id.payload })
            state[index].count ++;
            // for (const object of state) {
            //     if(object.id === id.payload) object.count ++;
            // }
        },
        addItem(state, action){
            state.push(action.payload);
        }
    }
})

export let { addCount, addItem } = cart.actions;

export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
    }
})