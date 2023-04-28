import styled from "styled-components";
import { CalendarCellWrapProps } from "./CalendarCell.types";
import { colors } from "../../colors";

export const CalendarCellWrap = styled.div<CalendarCellWrapProps>`
  min-width: 20px;
  min-height: 50px;
  padding: 2px;
  box-sizing: border-box;
  border-top: ${(props) => (props.top ? `1px solid ${colors.secondary}` : "0")};
  border-right: ${(props) =>
    props.right ? `1px solid ${colors.secondary}` : "0"};
  border-bottom: ${(props) =>
    props.bottom ? `1px solid ${colors.secondary}` : "0"};
  border-left: ${(props) =>
    props.left ? `1px solid ${colors.secondary}` : "0"};
  div {
    background: ${(props) =>
      props.selected
        ? colors.selected
        : props.event
        ? colors.event
        : colors.background};
  }
  cursor: ${(props) => (props.event ? "pointer" : "default")};
`;

export const CalendarCellContent = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 100%;
`;
