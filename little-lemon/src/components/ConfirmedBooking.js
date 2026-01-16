import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const location = useLocation();
  const formData = location.state || {};

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <section className="confirmed-booking-main-wrapper small-container">
      <h1>Your booking has been confirmed!</h1>
      <p>We look forward to seeing you at Little Lemon.</p>
      <div className="confirmation-details-wrapper">
        <h4>Reservation details:</h4>
        <ul>
          <li>
            <strong>Occasion:</strong> {formData.occasion || "N/A"}
          </li>
          <li>
            <strong>Guests:</strong> {formData.guests}
          </li>
          <li>
            <strong>Date:</strong> {formData.date}
          </li>
          <li>
            <strong>Time:</strong> {formData.time}
          </li>
        </ul>
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="button button-default"
      >
        Back to homepage
      </button>
    </section>
  );
}

export default ConfirmedBooking;
