import styled from "styled-components";
import { colors } from "../../colors";

export const CalendarWrap = styled.div`
  width: 100%;
  @media (min-width: 740px) {
    width: 740px;
  }
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  min-height: 400px;
`;

export const CalendarGrid = styled.div`
  box-sizing: border-box;
  padding-top: 16px;
  width: 100%;
  display: grid;
  @media (max-width: 370px) {
    grid-template-columns: 30px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  grid-template-columns: 60px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  background: white;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  box-sizing: content-box;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TextBox = styled.div`
  min-height: 40px;
  position: relative;
`;

export const Text = styled.div`
  color: ${colors.textSecondary};
  font-weight: 500;
  position: absolute;
  font-size: 16px;
  line-height: 16px;
  top: -9px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 370px) {
    font-size: 10px;
    line-height: 10px;
    top: -6px;
    right: 2px;
  }
`;

export const CalendarFooter = styled.div`
  background: ${colors.backgroundPrimary};
  border-top: 1px solid ${colors.backgroundBorder};
  height: 100px;
`;

export const FooterButtons = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 40px;
`;

export const FooterButton = styled.div`
  cursor: pointer;
  color: ${colors.accent};
  font-size: 22px;
  font-weight: 500;
  :hover {
    background: #f8ebeb;
  }
  :active {
    color: white;
  }
  padding: 8px;
  border-radius: 8px;
  @media (max-width: 370px) {
    font-size: 16px;
  }
`;
