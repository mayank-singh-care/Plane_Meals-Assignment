import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { changePassenger } from "../redux/cartSlice";

const passengers = ["Adult Passenger 1", "Adult Passenger 2"];

function Sidebar() {
  const { cartTotal, selectedPassenger } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <h2>Select Meals</h2>
      <Accordion className="accordion">
        <AccordionSummary
          className="accordionSummary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <div>
            <h3>Delhi - Mumbai</h3>
            <p>Flight Duration: 3h 40 mins</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {passengers.map((passenger, i) => (
            <div
              className={`passenger ${
                selectedPassenger === passenger && "activePassenger"
              }`}
              key={i}>
              <h5>{passenger}</h5>
              <Button
                variant="text"
                onClick={() => dispatch(changePassenger({ name: passenger }))}>
                Select Meal
              </Button>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      <p>
        Total fees for all passengers: <b>$ {cartTotal.toFixed(2)}</b>
      </p>
    </div>
  );
}

export default Sidebar;
