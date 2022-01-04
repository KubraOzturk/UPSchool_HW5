//import posts from "./Posts";
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostComment from './PostComment';

function PostDetails(props) {
  const params = useParams();
  console.log(params);

  //const { data } = props.setData;
  //console.log(data);
  //burada kendimi tekrarladığımı biliyorum fazladan olduğunu da ama props verip denediğimde yapamadım
  const [data, setData] = useState([]);
  useEffect(() => {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  console.log(data.id);
  
  function clickHandler(postId) {
    navigate(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

  return (
    <>
      <h1>Post Details</h1>
      {data
        .filter((item) => item.id === parseInt(params.postId))
        .map((item) => ( 
          <div className="col-sm-8 mb-2" key={item.id}>
            <div className="card">
              <img
                src={`https://picsum.photos/id/${item.id + 15}/300/200`}
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title.toUpperCase()}</h5>
                <p className="card-text">{item.body}</p>
              </div>
                
              <Link to={`comments`} className="btn btn-danger">
                See Post Comments
                <PostComment/>
              </Link>
              {console.log(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)}
            </div>
            
          </div>

        ))}
    </>
  );
}

export default PostDetails;

// to={`${item.id}/comments`}