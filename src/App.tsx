import React, { useEffect } from "react";
import "./App.css";
import { WeeklyCalendar } from "./components/WeeklyCalendar";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setEvents } from "./slices/eventsSlice";
import { eventsMock } from "./mocks";

function App() {
  const events = useAppSelector((state) => state.events.events);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setEvents(eventsMock.map((d) => d.getTime())));
  }, [dispatch]);

  return (
    <div className="App">
      <WeeklyCalendar events={events}></WeeklyCalendar>
    </div>
  );
}

export default App;
