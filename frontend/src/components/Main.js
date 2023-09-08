import React, { useState } from "react";
import FilterTags from "./FilterTags";
import MealsList from "./MealsList";
import Sidebar from "./Sidebar";
import Cart from "./Cart";
import { useSelector } from "react-redux";

function Main() {
  const { isCartOpen } = useSelector((state) => state.cart);
  const [filters, setFilters] = useState("all");
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            width: "750px",
          }}>
          <FilterTags filters={filters} setFilters={setFilters} />
          <MealsList filters={filters} />
        </div>
        <Sidebar />
      </div>
      {isCartOpen && <Cart />}
    </>
  );
}

export default Main;
