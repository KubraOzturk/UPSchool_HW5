import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

function PostSearch(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(location.search);
  const [urlQ, setUrlQ] = useState(urlParams.get('q'));
  const results = <h1>Arama Sonuclari:{urlQ}</h1>;

  function formHandler(event) {
    event.preventDefault();
    setUrlQ(event.target.qInput.value);
    navigate(`/arama?q=${event.target.qInput.value}`);
  }
  return (
    <>
      <form onSubmit={formHandler}>
        <div className="mb-3">
          <label htmlFor="search" className="form-label">
            Ara
          </label>
          <input
            name="qInput"
            type="text"
            className="form-control"
            id="search"
            defaultValue={urlQ}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ara
        </button>
      </form>
      {location.pathname === '/arama' && results}
    </>
  );
}

export default PostSearch;
