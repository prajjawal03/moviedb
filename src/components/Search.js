import React from 'react';


function Search({onChange,search}) {
  return (
    <section className="searchbox-wrap">
  			<input
  				type="text"
  				placeholder="Search"
  				className="searchbox"
          onChange={onChange}
          onKeyPress={search}
  			/>
  		</section>
  );
}

export default Search;
