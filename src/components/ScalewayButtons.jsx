import { BunnyBtnWrapper, BunnyBtn } from './BunnyButtons';

export default function ScalewayButtons({setMulti, setSingle, single, multi}) {

    const handleClick = (e) => {
    const { name } = e.target;
    switch (name) {
      case "multi":
        setMulti(true);
        setSingle(false);
        return;
      case "single":
        setMulti(false);
        setSingle(true);
        return;
      default:
        return;
    }
    }
  
  return (
    <BunnyBtnWrapper onClick={handleClick}>
        <BunnyBtn active={multi} name="multi">MULTI</BunnyBtn>
        <BunnyBtn active={single} name="single">SINGLE</BunnyBtn>
    </BunnyBtnWrapper>
  )
}
