import { useState, useEffect, createContext } from 'react';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db, auth, provider } from '../firebase';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [ currentUser, setCurrentUser ] = useState()

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
            postedOn: document.data().postedOn?.toDate(),
            author: document.data().author,
          }
        }
      }))
    }
    getPosts()
  })
/*
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [currentUser]);
*/
  const addUserToFirebase = async (user) => {
    await setDoc(doc(db, 'users', user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0
    })
  }

  const handleUserAuth = async () => {
    const user = (await signInWithPopup(auth, provider)).user;
    setCurrentUser(user);
    addUserToFirebase(user);
  }

  const logoutUser = () => {
    setCurrentUser(null);
  }

  return (
    <MediumContext.Provider value={{ posts, users, handleUserAuth, currentUser, logoutUser }}>
      {children}
    </MediumContext.Provider>
  )
}

export { MediumContext, MediumProvider }