import React, { useState } from "react";

import { WeeklyCalendarProps } from "./WeeklyCalendar.types";
import {
  CalendarFooter,
  CalendarGrid,
  CalendarWrap,
  FooterButton,
  FooterButtons,
  Text,
  TextBox,
} from "./WeeklyCalendar.style";
import { getGridBorders } from "../../utils/getGridBorders";
import { getWeekMatrix } from "../../utils/getWeek";
import { CalendarCell } from "../CalendarCell";
import { CalendarCellActionHandler } from "../CalendarCell/CalendarCell.types";
import { CalendarHeader } from "../CalendarHeader";
import { useAppDispatch } from "../../hooks";
import { addEvent, deleteEvent } from "../../slices/eventsSlice";

export const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({
  initialDate,
  events,
}) => {
  const dispatch = useAppDispatch();
  const [anchorDate, setAnchorDate] = useState<Date>(
    initialDate ? initialDate : new Date()
  );
  const week = getWeekMatrix(anchorDate).flat();
  const [selectedCell, setSelectedCell] = useState<Date | null>(null);
  const handleCellClick: CalendarCellActionHandler = (d) => {
    setSelectedCell(d);
  };
  const handleEmptyCellClick: CalendarCellActionHandler = () => {
    setSelectedCell(null);
  };

  const handleNextWeek = () => {
    setAnchorDate(
      new Date(
        anchorDate.getFullYear(),
        anchorDate.getMonth(),
        anchorDate.getDate() + 7
      )
    );
  };
  const handlePrevWeek = () => {
    setAnchorDate(
      new Date(
        anchorDate.getFullYear(),
        anchorDate.getMonth(),
        anchorDate.getDate() - 7
      )
    );
  };

  const handleTodayClick = () => {
    setAnchorDate(new Date());
  };

  const handleDeleteEvent = () => {
    dispatch(deleteEvent(selectedCell?.getTime() || 0));
    setSelectedCell(null);
  };

  const handleCreateEvent = () => {
    let dateString = prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss", "");
    if (dateString === null) return;
    let timestamp = Date.parse(dateString);
    if (isNaN(timestamp)) {
      alert("Incorrect date!");
      return;
    }
    dispatch(addEvent(timestamp));
  };

  return (
    <CalendarWrap>
      <CalendarHeader
        onNextWeek={handleNextWeek}
        onPrevWeek={handlePrevWeek}
        anchorDate={anchorDate}
        onCreate={handleCreateEvent}
      />
      <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
        <CalendarGrid>
          {week.map((el, i) => {
            const [top, right, bottom, left] = getGridBorders(i, week.length);
            const isEvent = events?.some(
              (e) => e === (typeof el === "object" ? el.getTime() : 0)
            );
            return i % 8 === 0 ? (
              <TextBox key={i}>
                <Text>{typeof el === "string" ? el : "00:00"}</Text>
              </TextBox>
            ) : (
              <CalendarCell
                key={i}
                top={top}
                right={right}
                bottom={bottom}
                selected={
                  selectedCell?.getTime() ===
                  (typeof el === "object" ? el.getTime() : 0)
                }
                left={left}
                date={typeof el === "object" ? el : new Date()}
                event={isEvent}
                onClick={isEvent ? handleCellClick : handleEmptyCellClick}
              />
            );
          })}
        </CalendarGrid>
      </div>
      <CalendarFooter>
        <FooterButtons>
          <FooterButton onClick={handleTodayClick}>Today</FooterButton>
          {selectedCell && (
            <FooterButton onClick={handleDeleteEvent}>Delete</FooterButton>
          )}
        </FooterButtons>
      </CalendarFooter>
    </CalendarWrap>
  );
};
