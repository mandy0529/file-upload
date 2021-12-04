import React, {useState} from 'react';
import useStorage from '../hooks/useStorage';
import ProgressBar from './ProgressBar';

function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setMessage(`succeed image upload ${selected.name}`);
    } else {
      setFile(null);
      setMessage('please upload file format (png /jpeg)');
    }
  };

  return (
    <form>
      {file && (
        <div>
          <ProgressBar file={file} message={message} setFile={setFile} />
        </div>
      )}
      <input type="file" multiple onChange={handleChange} />
    </form>
  );
}

export default Upload;
