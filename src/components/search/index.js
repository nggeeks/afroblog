import React from 'react';

const Search = ({ placeHolder, onSearchTermChanged}) => {

    return (
        <div>
            <input placeholder={placeHolder} onChange={onSearchTermChanged} /> 
        </div>
    )
}

export default Search;