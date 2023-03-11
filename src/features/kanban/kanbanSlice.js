import { createSlice } from "@reduxjs/toolkit";

export const kanbanSlice = createSlice({
  name: "kanban",
  initialState: {
    user: [],
    isAUTH: false,
  },
  reducers: {
    adduser: (state, action) => {
      state.user = action.payload;
    },
    setIsAUTH: (state, action) => {
      state.isAUTH = action.payload;
    },
    deleteuser: (state, action) => {
      state.user = {};
    },
  },
});

export const { adduser, deleteuser, setIsAUTH } = kanbanSlice.actions;
export default kanbanSlice.reducer;
