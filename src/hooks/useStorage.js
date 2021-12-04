import {useState, useEffect} from 'react';
import {imageDb, db, timesatamp} from '../firebase';

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState('');

  const handleStorage = () => {
    if (file) {
      const imgDbRef = imageDb.ref(file.name);
      const collectionRef = db.collection('images');
      imgDbRef.put(file).on(
        'state_changed',
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (error) => {
          setError(error);
        },
        async () => {
          const url = await imgDbRef.getDownloadURL();
          const createdAt = timesatamp();
          collectionRef.add({url, createdAt});
          setUrl(url);
        }
      );
    }
  };

  useEffect(() => {
    handleStorage();
  }, [file]);

  return {progress, error, url};
}

export default useStorage;
