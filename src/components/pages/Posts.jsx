import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import PostDetails from './PostDetails';

function Posts(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h1>Yukleniyor</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
 
      {data.map((item,index) => (
        <div className="col-sm-6" key={index}>
          <img 
            className="card-img-top rounded mx-auto d-block"
            src={`https://picsum.photos/id/${item.id + 2}/300/200`}
          />
          <h2  className="card-body">{item.title}</h2>
          <Link className="card-body" data={item} to={`posts/${item.id}`}>
            <span>{item.title}</span>
          </Link>
          <div  className="card-body">
            <p >{item.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
