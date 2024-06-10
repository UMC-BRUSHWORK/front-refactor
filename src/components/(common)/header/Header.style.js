import styled from "styled-components";
import font from "../../../styles/font";

export const Wrapper = styled.div`
  height: 7vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 8px 6px -6px rgba(0,0,0,0.15);
`

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Title = styled.text`
  font: ${font.medium_19};
  color: black;
  line-height: 7vh;
`