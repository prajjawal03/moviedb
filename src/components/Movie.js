import React from 'react';


function Movie({result,openPopup}) {
  return (
    <div className="result" onClick={()=>{openPopup(result.imdbID)}}>
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
		</div>
  );
}

export default Movie
