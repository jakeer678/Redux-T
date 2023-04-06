import { createSlice, configureStore } from "@reduxjs/toolkit";

const initailState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initailState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle() {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export default store;

//configureStore whil will make merging multiple reducers in to one reducer

// import { createStore } from "redux";

// const counterReducer = (state = { counter: 0, showCounter:true }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 5,
//       showCounter:state.showCounter
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 5,
//       showCounter:state.showCounter
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter:state.showCounter
//     };
//   }
//   if(action.type==="toggle") {
//     return {
//         showCounter: !state.showCounter,
//         counter:state.counter
//     }
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
