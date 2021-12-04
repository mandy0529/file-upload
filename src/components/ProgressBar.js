import React, {useEffect} from 'react';
import styled from 'styled-components';
import useStorage from '../hooks/useStorage';

function ProgressBar({file, message, setFile}) {
  const {url, progress} = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);

  return (
    <Wrapper progress={progress}>
      <div className="progress-bar"> </div>
      {progress === 100 && (
        <h4 className="output">
          {message && <div className="error success">{message}</div>}
        </h4>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .progress-bar {
    width: ${(props) => props.progress}%;
    margin-top: 20px;
    height: 5px;
    background: orange;
  }
  h4 {
    margin: 3rem 0;
  }
`;
export default ProgressBar;
