export type CalendarHeaderProps = {
  anchorDate?: Date;
  onNextWeek: React.MouseEventHandler;
  onPrevWeek: React.MouseEventHandler;
  onCreate: React.MouseEventHandler;
};

export type WeekdayCapsuleProps = {
  today?: boolean;
};
