import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};
const product = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchData(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "idle";
    });
    //   .addCase(getProducts.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(getProducts.error, (state, action) => {
    //     state.status = "error";
    //   });
  },
});

export const { fetchData } = product.actions;

export default product.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

// export function getProducts() {
//   return async function getThunkProducts(dispatch, getState) {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     dispatch(fetchData(data));
//   };
// }
