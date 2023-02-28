import styled from 'styled-components';

export const BunnyBtnWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 130px;
`;

export const BunnyBtn = styled.button`
  border: none;
  background-color: ${props => props.active ? "red" : "transparent"};
  
`;

export default function BunnyButtons({setHDDActive, setSSDActive, SSDActive, HDDActive}) {


  const handleClick = (e) => {
    const { name } = e.target;
    switch (name) {
      case "HDD":
        setHDDActive(true);
        setSSDActive(false);
        return;
      case "SSD":
        setHDDActive(false);
        setSSDActive(true);
        return;
      default:
        return;
    }
  }

  return (
    <BunnyBtnWrapper onClick={handleClick}>
        <BunnyBtn active={HDDActive} name="HDD">HDD</BunnyBtn>
        <BunnyBtn active={SSDActive} name="SSD">SSD</BunnyBtn>
    </BunnyBtnWrapper>
  )
}
