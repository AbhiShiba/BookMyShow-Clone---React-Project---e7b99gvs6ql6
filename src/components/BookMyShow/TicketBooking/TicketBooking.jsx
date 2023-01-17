import React from "react";
import { TheaterScreen } from "./TheaterScreen";
import { TheaterSeats } from "./TheaterSeats";
import "./TicketBooking.css";

const theaterName = ["PVR Cinema", "Metro INOX Cinema", "Cinepolis"];
const showTime = ["10:15", "12:45", "3:15", "5:45"];
const theaterSeats = ["0","1","2","3","4","5","6","7","8","9"];

export function TicketBooking(props) {
  console.log(props.BookingData);
  const options = (arr, name) => {
    return arr.map((item, index) => {
      return (
        <option value={index} key={name + index}>
          {item}
        </option>
      );
    });
  };
  return (
    <div className="book">
      <h3>Book Ticket</h3>
      <p>
        <span className="heading">Movie: </span>
        {props.BookingData.stateUp.detils.title}
      </p>

      <div className="Booking-nav">
        <div className="border-class">
          <select className="select-theater">
            {options(theaterName, "theater")}
          </select>
        </div>
        <div className="border-class">
          <input type="date" />
        </div>
        <div className="border-class">
          <select className="select-theater">
            {options(showTime, "time")}
          </select>
        </div>
      </div>
      <div className="ticket">
        <TheaterScreen />
        <div className="seats-section"><TheaterSeats Seats={theaterSeats} movieName={props.BookingData.stateUp.detils.title} /></div>
      </div>
    </div>
  );
}
