import React, { useCallback } from "react";

import { CalendarCellProps } from "./CalendarCell.types";
import { CalendarCellContent, CalendarCellWrap } from "./CalendarCell.style";

export const CalendarCell: React.FC<CalendarCellProps> = ({
  top,
  right,
  bottom,
  left,
  date,
  onClick,
  selected,
  event,
}) => {
  const handleClick = useCallback(
    (d: Date) => {
      if (onClick) {
        onClick(d);
      }
    },
    [onClick]
  );
  return (
    <CalendarCellWrap
      onClick={() => {
        handleClick(date);
      }}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      selected={selected}
      event={event}
    >
      <CalendarCellContent />
    </CalendarCellWrap>
  );
};
