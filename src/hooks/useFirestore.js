import React, {useEffect, useState} from 'react';
import {db} from '../firebase';

function useFirestore(data) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  const handleCollection = () => {
    db.collection(data)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        console.log(snap, 'snap');
        let documents = [];
        snap.forEach((doc) => {
          documents.push({...doc.data(), id: doc.id});
        });
        setImages(documents);
      });
  };

  useEffect(() => {
    handleCollection();
    return () => handleCollection();
  }, [data]);

  return {images};
}

export default useFirestore;
