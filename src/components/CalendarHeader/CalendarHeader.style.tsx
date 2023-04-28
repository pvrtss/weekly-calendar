import styled from "styled-components";
import { ReactComponent as PlusSVG } from "../../assets/plus.svg";
import { colors } from "../../colors";
import { WeekdayCapsuleProps } from "./CalendarHeader.types";

export const CalendarHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeekDaysWrap = styled.div`
  background: ${colors.backgroundPrimary};
  border-top: 1px solid ${colors.backgroundBorder};
  border-bottom: 1px solid ${colors.backgroundBorder};
  height: 116px;
`;

export const WeekdayGrid = styled.div`
  margin-left: 60px;
  @media (max-width: 370px) {
    margin-left: 30px;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const WeekdayCapsule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeekdayCapsuleTitle = styled.div`
  margin-top: 10px;
  font-weight: 700;
  font-size: 14px;
`;

export const WeekdayCapsuleNumber = styled.div<WeekdayCapsuleProps>`
  margin-top: 6px;
  font-weight: 500;
  font-size: 22px;
  line-height: 20px;
  @media (max-width: 370px) {
    font-size: 14px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${(props) => (props.today ? colors.accent : "transparent")};
  color: ${(props) => (props.today ? "white" : "black")};
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  height: 108px;
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 28px;
`;

export const StyledPlus = styled(PlusSVG)`
  fill: ${colors.accent};
  width: 28px;
  height: 28px;
`;

export const PlusWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 22px;
  :hover {
    background: #f8ebeb;
  }
  :active {
    > svg {
      fill: white;
    }
  }
  cursor: pointer;
`;

export const WeekSwitchWrap = styled.div`
  margin-left: 60px;
  @media (max-width: 370px) {
    margin-left: 30px;
  }
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: 43px;
  align-items: baseline;
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  line-height: 0%;
  font-size: 24px;
  font-weight: 900;
  color: ${colors.accent};
  cursor: pointer;
  user-select: none;
`;

export const WeekSwitchTitle = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 370px) {
    font-size: 14px;
  }
`;
