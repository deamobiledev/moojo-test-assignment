import { createSlice } from '@reduxjs/toolkit';

const offerSlice = createSlice({
  name: 'offers',
  initialState: {
    offers: [],
  },
  reducers: {
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
  },
});

export const { setOffers } = offerSlice.actions;
export default offerSlice.reducer;
