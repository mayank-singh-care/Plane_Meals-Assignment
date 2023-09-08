import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || {
    "Adult Passenger 1": [],
    "Adult Passenger 2": [],
  }, // cartItems with respect to Passengers
  cartTotal: +localStorage.getItem("cartTotal") || 0,
  isCartOpen: false,
  selectedPassenger:
    localStorage.getItem("selectedPassenger") || "Adult Passenger 1",
};

function setToLocalStorage(state) {
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  localStorage.setItem("cartTotal", state.cartTotal);
  localStorage.setItem("selectedPassenger", state.selectedPassenger);
}

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = { "Adult Passenger 1": [], "Adult Passenger 2": [] };
      state.cartTotal = 0;
      setToLocalStorage(state);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addMeals: (state, action) => {
      // Meals - for particular Passenger
      let mealObj = state.cartItems[action.payload.passenger].find(
        (meal) => meal.id === action.payload.meal.id
      );
      if (mealObj) {
        mealObj.quantity++;
      } else {
        state.cartItems[action.payload.passenger].push(action.payload.meal);
      }
      state.cartTotal += action.payload.meal.price;
      setToLocalStorage(state);
    },
    deleteMeals: (state, action) => {
      let mealObj = state.cartItems[action.payload.passenger].find(
        (meal) => meal.id === action.payload.mealId
      );
      state.cartTotal -= mealObj.quantity * mealObj.price;
      state.cartItems[action.payload.passenger] = state.cartItems[
        action.payload.passenger
      ].filter((meal) => meal.id !== action.payload.mealId);
      setToLocalStorage(state);
    },
    toggleDrinks: (state, action) => {
      // Drinks - for particular Meal of particular Passenger
      let mealObj = state.cartItems[action.payload.passenger].find(
        (meal) => meal.id === action.payload.mealId
      );

      let drinkObj = mealObj.drinks.find(
        (drink) => drink.id === action.payload.drink.id
      );

      if (drinkObj) {
        mealObj.drinks = mealObj.drinks.filter(
          (drink) => drink.id !== drinkObj.id
        );
        state.cartTotal -= action.payload.drink.price;
      } else {
        mealObj.drinks.push(action.payload.drink);
        state.cartTotal += action.payload.drink.price;
      }
      setToLocalStorage(state);
    },
    changeMealQty: (state, action) => {
      let meal = state.cartItems[action.payload.passenger].find(
        (meal) => meal.id === action.payload.mealId
      );
      let qty = meal.quantity;
      meal.quantity = action.payload.mealQty;
      state.cartTotal += (action.payload.mealQty - qty) * meal.price;
      setToLocalStorage(state);
    },
    changePassenger: (state, action) => {
      state.selectedPassenger = action.payload.name;
      setToLocalStorage(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  clearCart,
  toggleCart,
  addMeals,
  deleteMeals,
  toggleDrinks,
  changeMealQty,
  changePassenger,
} = cartSlice.actions;

export default cartSlice.reducer;
