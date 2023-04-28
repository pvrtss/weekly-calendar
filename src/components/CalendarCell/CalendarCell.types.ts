export type CalendarCellProps = {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  date: Date;
  selected?: boolean;
  event?: boolean;
  onClick?: CalendarCellActionHandler;
};

export type CalendarCellActionHandler = (d: Date) => void;

export type CalendarCellWrapProps = {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  selected?: boolean;
  event?: boolean;
};
