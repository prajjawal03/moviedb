import React from 'react';
import Movie from './Movie'

  function List({result,openPopup}) {
    
  return (
    <section className="results">
    {result.map(result=><Movie key={result.imdbID} result={result} openPopup={openPopup}/>)}
    </section>
  );
}

export default List;
