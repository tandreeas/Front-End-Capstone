import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  console.log("dispatch:", dispatch);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      payload: selectedDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  const isFormValid = date && time && guests >= 1 && guests <= 10 && occasion;

  return (
    <div className="booking-form-main-wrapper small-container">
      <h1>Book Now</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
            aria-label="Select a reservation date"
          />
        </div>

        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-label="Select a reservation time"
          >
            <option value="">Select a time</option>
            {Array.isArray(availableTimes) &&
              availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            aria-label="Add number of guests"
          />
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="">Select occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <button
          className="button button-default"
          type="submit"
          disabled={!isFormValid}
          aria-label="On Click"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
