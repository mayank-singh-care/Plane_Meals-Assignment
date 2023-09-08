import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: { "Adult Passenger 1": [], "Adult Passenger 2": [] }, // cartItems with respect to Passengers
  cartTotal: 0,
  isCartOpen: false,
  selectedPassenger: "Adult Passenger 1",
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = { "Adult Passenger 1": [], "Adult Passenger 2": [] };
      state.cartTotal = 0;
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
    },
    deleteMeals: (state, action) => {
      let mealObj = state.cartItems[action.payload.passenger].find(
        (meal) => meal.id === action.payload.mealId
      );
      state.cartTotal -= mealObj.quantity * mealObj.price;
      state.cartItems[action.payload.passenger] = state.cartItems[
        action.payload.passenger
      ].filter((meal) => meal.id !== action.payload.mealId);
    },
    toggleDrinks: (state, action) => {
      // Drinks - for particular Meal of particular Passenger
      let mealObj = state.cartItems[action.payload.passenger].find(
        (meal) => meal.id === action.payload.mealId
      );
      console.log(action.payload.drink);
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
    },
    changeMealQty: (state, action) => {
      console.log(action.payload);
      let meal = state.cartItems[action.payload.passenger].find(
        (meal) => meal.id === action.payload.mealId
      );
      let qty = meal.quantity;
      meal.quantity = action.payload.mealQty;
      state.cartTotal += (action.payload.mealQty - qty) * meal.price;
    },
    changePassenger: (state, action) => {
      state.selectedPassenger = action.payload.name;
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
