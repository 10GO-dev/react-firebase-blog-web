import React, { useEffect, useState } from 'react'
import PostCard from './post-card.component'
import { db } from 'config/firebase-config'
import { getDocs , collection } from 'firebase/firestore'
import { Container } from 'react-bootstrap'


function PostsList() {
  const [postsList, setPostsList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef)
    setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
  };

  useEffect(() => {
    getPosts()
  });

  return (
      <>
      {postsList.map((post) => {
        return <PostCard post={post}/>
      } )}
      </>
  )
}

export default PostsList