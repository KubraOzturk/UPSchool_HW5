import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import PostDetails from './PostDetails';
import { useParams } from 'react-router-dom';

function AllPosts(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log("params:",params);

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
 
function clickHandler(){
  
  data
    .filter((item) => item.id ===parseInt(params.postId) )
    .map((item,index) => (
      <div key={index}>
        {/* <img key={index}
          src={`https://picsum.photos/id/${item.id.split('-')[1]}/300/200`}
        />
        <h1 key={index}>{item.title}</h1>
        <p key={index} >{item.detail}</p> */
        navigate(`/posts/${params.productId}`)
        }

      </div>
    ))

}
  return (
    <>
      <h1>All Posts</h1>
      <table className="table  table-sm table-secondary">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
            <th scope="col">detail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td className='text-danger'>{item.title.toUpperCase()}</td>
              <td>{item.body}</td>
              <td>
                {/* <button type="button" className="btn btn-info" onClick={clickHandler} >
                  See Details
                </button> */}
                <Link to={`${item.id}`} className="btn btn-info">
                Post Details
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <caption>List of posts</caption>
      </table>
    </>
  );
}

export default AllPosts;
