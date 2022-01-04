import PostSearch from './PostSearch';
import React from 'react';
import Posts from './Posts';
function Home(props) {
  return (
    <>
      <h1>Ana Sayfa</h1>
      <PostSearch />
      <Posts />
    </>
  );
}

export default Home;
