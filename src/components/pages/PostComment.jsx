import React from 'react';

function PostComment(props) {

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

    <div className="d-flex justify-content-start py-2">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
               <div className="d-flex justify-content-between py-1 pt-2">
                  <div><img src="https://i.imgur.com/AgAC1Is.jpg" width="18" /><span className="text2">Martha</span></div>
                  <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span></div>
             </div>
            </div>
    </div>
  );
}

export default PostComment;
