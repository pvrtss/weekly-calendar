import React from "react";

import { CalendarHeaderProps } from "./CalendarHeader.types";
import {
  Arrow,
  CalendarHeaderWrap,
  PlusWrap,
  StyledPlus,
  Title,
  TitleBar,
  WeekDaysWrap,
  WeekSwitchTitle,
  WeekSwitchWrap,
  WeekdayCapsule,
  WeekdayCapsuleNumber,
  WeekdayCapsuleTitle,
  WeekdayGrid,
} from "./CalendarHeader.style";
import { getWeek } from "../../utils/getWeek";
import { getWeekdayLetter } from "../../utils/getWeekdayLetter";
import { getMonthStringByWeek } from "../../utils/getMonthStringByWeek";

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  anchorDate,
  onPrevWeek,
  onNextWeek,
  onCreate,
}) => {
  const week = getWeek(anchorDate ? anchorDate : new Date());

  const checkToday = (d: Date) => {
    let today = new Date();
    let check = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    return check.getTime() === d.getTime();
  };
  return (
    <CalendarHeaderWrap>
      <TitleBar>
        <Title>Interview Calendar</Title>
        <PlusWrap onClick={onCreate}>
          <StyledPlus />
        </PlusWrap>
      </TitleBar>
      <WeekDaysWrap>
        <WeekdayGrid>
          {week.map((d, key) => (
            <WeekdayCapsule key={key}>
              <WeekdayCapsuleTitle>{getWeekdayLetter(d)}</WeekdayCapsuleTitle>
              <WeekdayCapsuleNumber today={checkToday(d)}>
                {d.getDate()}
              </WeekdayCapsuleNumber>
            </WeekdayCapsule>
          ))}
        </WeekdayGrid>
        <WeekSwitchWrap>
          <Arrow onClick={onPrevWeek}>&lt;</Arrow>
          <WeekSwitchTitle>{getMonthStringByWeek(week)}</WeekSwitchTitle>
          <Arrow onClick={onNextWeek}>&gt;</Arrow>
        </WeekSwitchWrap>
      </WeekDaysWrap>
    </CalendarHeaderWrap>
  );
};
