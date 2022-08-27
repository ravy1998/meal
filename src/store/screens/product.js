import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  error: "",
  loading: false,
};

const productsScreen = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsSuccess(state, action) {
      state.products = action.payload;
      state.error = "";
      state.loading = false
    },
    productsFailed(state) {
      state.error = "Error or Occured";
      state.loading = false
    },
    isLoading(state){
      state.loading = true
    }
  },
});

const { productsSuccess, productsFailed, isLoading } = productsScreen.actions;

export const productsAPI = () => async (dispatch) => {
  dispatch(isLoading());
   await axios
    .get("https://lfstage.html5.run/weeks")
    .then((response) => {
      dispatch(productsSuccess(response.data));
    })
    .catch((errors) => {
      console.log(errors);
    });
};

export default productsScreen.reducer;
