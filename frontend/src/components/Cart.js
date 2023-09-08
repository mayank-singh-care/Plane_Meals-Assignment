import React from "react";
import CartCard from "./CartCard";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, toggleCart } from "../redux/cartSlice";
import "./Cart.css";

function Cart() {
  const { cartItems, isCartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(toggleCart());
  };

  return (
    <div>
      <Drawer anchor={"right"} open={isCartOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 350 }} role="presentation">
          <div className="cartHeader">
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(clearCart());
              }}>
              Clear cart
            </Button>
            <h1>Cart</h1>
            <CloseIcon onClick={toggleDrawer} />
          </div>
          <List>
            {Object.entries(cartItems).map(([passenger, meals]) => {
              return (
                <>
                  <h3 key={passenger} className="passengerCart">
                    {passenger}
                  </h3>
                  {meals.map((meal) => (
                    <CartCard key={meal.id} item={meal} passenger={passenger} />
                  ))}
                  <hr />
                </>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default Cart;
