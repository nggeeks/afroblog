import React from 'react';
import styled from 'styled-components';

const Post = ({ title, body, author, id, onPostDelete}) => {

    const Wrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px 16px;
    margin: 16px 0;
    `
    return(
        <Wrapper key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>Posted by: {author}</p>
        <button onClick={() => onPostDelete(id)}>Delete</button>
      </Wrapper>
    )
}

export default Post;