import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface EventsState {
  events: number[];
}

// Define the initial state using that type
const initialState: EventsState = {
  events: [],
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<number[]>) => {
      state.events = action.payload;
    },
    addEvent: (state, action: PayloadAction<number>) => {
      state.events = state.events.concat(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<number>) => {
      state.events = state.events.filter((e) => e !== action.payload);
    },
  },
});

export const { setEvents, addEvent, deleteEvent } = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.events.events;

export default eventsSlice.reducer;
