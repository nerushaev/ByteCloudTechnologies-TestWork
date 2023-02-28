import styled, { css } from 'styled-components';

export const ChartWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const ChartLabel = styled.p`
  position: absolute;
  bottom: -40px;
`;

export const Chart = css`
  width: 56px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;

export const MakeBar = styled.div.attrs(props => ({
  style: {
    height: props.h
  }
}))`
  background-color: #e0a106;
  ${Chart};
`;

export const Number = styled.span`
  justify-content: bottom;
  font-size: 14px;
  text-align: center;
`;

export const BarChartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const sliderThumbsStyles = (props) => (`
  width: 25px;
  height: 25px;
  background: #efefef;
  cursor: pointer;
  outline: 5px solid #333;
`);

export const InputStyles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom; 2rem;
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 90%;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    ${props => sliderThumbsStyles(props)}
  }
  &::-moz-range-thumb {
    ${props => sliderThumbsStyles(props)}
  }
`;

export const NumberInput = styled.input`
  width: 40px;
`;
