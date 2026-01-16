import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "../api/api";

jest.mock("../api/api", () => ({
  fetchAPI: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => <>{children}</>,
  Routes: ({ children }) => <>{children}</>,
  Route: () => null,
  useNavigate: () => jest.fn(),
}));

test("initializeTimes returns available times from fetchAPI", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];
  fetchAPI.mockReturnValue(mockTimes);

  const result = initializeTimes();

  expect(result).toEqual(mockTimes);
});

test("updateTimes returns new times based on selected date", () => {
  const mockTimes = ["18:00", "19:00", "20:00"];
  fetchAPI.mockReturnValue(mockTimes);

  const state = [];
  const action = {
    type: "UPDATE_TIMES",
    payload: "2026-01-14",
  };

  const result = updateTimes(state, action);

  expect(result).toEqual(mockTimes);
});

test("updateTimes returns same state for unknown action type", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "UNKNOWN_ACTION" };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});
