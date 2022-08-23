import { useState, useEffect, createContext } from 'react';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      setUsers(querySnapshot.docs.map(document => {
        return {
          id: document.id,
          data: { ...document.data() }
        }
      }))
    }
    getUsers();
    console.log(users)
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'));
      setPosts(querySnapshot.docs.map((document) => {
        return {
          id: document.id,
          data: {
            body: document.data().body,
            brief: document.data().brief,
            category: document.data().category,
            postLength: document.data().postLength,
            bannerImage: document.data().bannerImage,
            title: document.data().title,
            postedOn: document.data().postedOn.toDate(),
            author: document.data().author,
          }
        }
      }))
    }
    getPosts()
  })

  return (
    <MediumContext.Provider value={{ posts, users }}>
      {children}
    </MediumContext.Provider>
  )
}

export { MediumContext, MediumProvider }