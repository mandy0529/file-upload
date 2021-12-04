import React, {useState} from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/useFirestore';
import Modal from './Modal';

function ImageGrid() {
  const {images} = useFirestore('images');
  const [selected, setSelected] = useState(null);

  const handleModal = (url) => {
    setSelected(url);
  };

  return (
    <Wrapper>
      {selected && <Modal selected={selected} setSelected={setSelected} />}
      {images.map((item) => {
        const {id, createdAt, url} = item;
        return (
          <div onClick={() => handleModal(url)} key={id} className="img-wrap">
            <img src={url} alt={id} />
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 40px;
  .img-wrap {
    overflow: hidden;
    height: 0;
    padding: 50% 0;
    position: relative;
    opacity: 0.8;
    /* width: 300px; */
    /* background: black; */
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
`;
export default ImageGrid;
