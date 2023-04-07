import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
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
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialStateAuth = {
  isAutenticated: false,
};

const authSlice = createSlice({
  name: "authenticated",
  initialState: initialStateAuth,
  reducers: {
    login(state) {
      state.isAutenticated = true;
    },
    logout(state) {
      state.isAutenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const authActions = authSlice.actions;
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
