import React, {useEffect, useState} from 'react';
import {getDocs, addDoc, doc, deleteDoc, onSnapshot} from 'firebase/firestore';
import {collectionRef, db} from '../bookFirebase';

function Books() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [books, setBooks] = useState([]);
  const [deletedId, setDeletedId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collectionRef, {
      title: value,
      author: value2,
    });
    setValue('');
    setValue2('');
  };

  const getData = async () => {
    onSnapshot(collectionRef, (data) => {
      let newBook = [];
      data.docs.map((item) => {
        newBook.push({...item.data(), id: item.id});
      });
      setBooks(newBook);
    });
  };

  const deleteSubmit = async (e) => {
    e.preventDefault();
    const deletedRef = doc(db, 'books', deletedId);
    await deleteDoc(deletedRef);
    setDeletedId('');
  };

  console.log(books, 'books');

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="add">
        <label htmlFor="title">title:</label>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          name="title"
          required
        />
        <label htmlFor="author">author:</label>
        <input
          onChange={(e) => setValue2(e.target.value)}
          value={value2}
          type="text"
          name="author"
          required
        />
        <button>add a new book</button>
      </form>

      <form onSubmit={deleteSubmit} className="delete">
        <label htmlFor="id">document id :</label>
        <input
          onChange={(e) => setDeletedId(e.target.value)}
          value={deletedId}
          type="text"
          name="id"
          required
        />
        <button>delete a book</button>
      </form>
    </>
  );
}

export default Books;
