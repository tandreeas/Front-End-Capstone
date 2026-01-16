import { React, useReducer } from "react";
import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api/api";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  function initializeTimes() {
    const result = fetchAPI(new Date());
    return Array.isArray(result) ? result : [];
  }

  function updateTimes(state, action) {
    if (action.type === "UPDATE_TIMES") {
      const result = fetchAPI(new Date(action.payload));
      return Array.isArray(result) ? result : [];
    }
    return state;
  }

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function submitForm(formData) {
    const success = submitAPI(formData);

    if (success) {
      navigate("/booking-confirmed", { state: formData });
    }
  }

  return (
    <main>
      <div className="container">
        <Routes>
           <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
