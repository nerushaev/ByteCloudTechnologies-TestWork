import { useState } from "react";
import { BarChartContainer, NumberInput, InputStyles, ChartLabel, ChartWrapper, Number, MakeBar } from './components/Chart.styled';
import BunnyButtons from './components/BunnyButtons';
import ScalewayButtons from './components/ScalewayButtons';

export default function App() {
  const [storage, setStorage] = useState(300);
  const [transfer, setTransfer] = useState(300);
  const [HDDActive, setHDDActive] = useState(true);
  const [SSDActive, setSSDActive] = useState(false);
  const [multi, setMulti] = useState(true);
  const [single, setSingle] = useState(false);

  const storageBackblazePrice = 0.005;
  const transferBackblazePrice = 0.01;

  const storageBunnyPrice = HDDActive ? 0.01 : 0.02;
  const transferBunnyPrice = 0.01;

  const storageScalewayPrice = multi ? 0.06 : 0.03;
  const transferScalewayPrice = 0.02;

  const storageVultrPrice = 0.01;
  const transferVultrPrice = 0.01;

  const calculateBackblaze = () => {
    const result = (storage * storageBackblazePrice) + (transfer * transferBackblazePrice);
    if (result < 7) {
      return 7;
    }
    return result.toFixed(2);
  }

  const calculateBunny = () => {
    const result = (storage * storageBunnyPrice) + (transfer * transferBunnyPrice);
    if (result > 10) {
      return 10;
    }
    return result.toFixed(2);
  }

  const calculateScaleway = () => {
    const result = ((storage <= 75 ? storage : storage - 75) * storageScalewayPrice) + ((transfer <= 75 ? transfer : transfer - 75) * transferScalewayPrice);
    return result.toFixed(2);
  }

  const calculateVultr = () => {
    const result = (storage * storageVultrPrice) + (transfer * transferVultrPrice);
    if (result < 5) {
      return 5;
    }
    return result.toFixed(2);
  }

  const data = [
    { label: "backblaze", price: calculateBackblaze() },
    { label: "bunny", price: calculateBunny() },
    { label: "scaleway", price: calculateScaleway() },
    { label: "vultr", price: calculateVultr() },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "storage":
        return setStorage(value);
      case "transfer":
        return setTransfer(value);
      default:
        return;
    }
  }

  return (
    <>
      <ChartWrapper>
      {data.map(({ label, price }, i) => {
        return (
          <BarChartContainer key={i}>
            <Number> {price} $</Number>
            <MakeBar h={price * 5} />
            <ChartLabel>{label}</ChartLabel>
            {label === "bunny" ? <BunnyButtons setHDDActive={setHDDActive} setSSDActive={setSSDActive} HDDActive={HDDActive} SSDActive={SSDActive} /> : ""}
            {label === "scaleway" ? <ScalewayButtons setMulti={setMulti} setSingle={setSingle} multi={multi} single={single} /> : ""}
          </BarChartContainer>
          );
      })}
      </ChartWrapper>
      <InputStyles>
        <label htmlFor="storage">Storage: {storage}GB</label>
        <input className="slider" onChange={handleChange} name="storage" type="range" min="0" max="1000" value={storage} />
      </InputStyles>
      <InputStyles>
        <label htmlFor="transfer">Transfer: {transfer}GB</label>
        <input className="slider" onChange={handleChange} name="transfer" type="range" min="0" max="1000" value={transfer} />
      </InputStyles>
      </>
  )
}
