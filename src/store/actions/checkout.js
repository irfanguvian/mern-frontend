import { CHECKOUT_BOOKING } from "../types";
import axios from "axios";
export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};

export const submitBooking = (payload) => () => {
  return axios.post(`http://localhost:5000/api/v1/booking-page`, payload, {
    headers: { contentType: "multipart/form-data" },
  });
};
