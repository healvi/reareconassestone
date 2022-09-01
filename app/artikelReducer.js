import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  artikels : []
};

export const artikelReducer = createSlice({
  name: "artikels",
  initialState,
  reducers: {
    setartikelGlobal: (state, action) => {
        state.artikels  = action.payload
    }
  },
});


export const {setartikelGlobal } = artikelReducer.actions;
export default artikelReducer.reducer;
