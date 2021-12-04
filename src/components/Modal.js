import React from 'react';
import styled from 'styled-components';

function Modal({selected, setSelected}) {
  console.log(selected, 'selected');
  const handleClick = () => {
    setSelected(null);
  };
  return (
    <Wrapper onClick={handleClick}>
      <img src={selected} alt="modal-img" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  img {
    display: block;
    max-height: 80%;
    max-width: 60%;
    width: 500px;
    height: 500px;
  }
`;
export default Modal;
