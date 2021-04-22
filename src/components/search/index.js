import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
margin: 20px;
display: flex;

`

const InputWrapper = styled.input`
overflow: visible;
box-shadow: none;
min-height: 40px;
width: 40%;
padding: 8px;
border-radius: none;
background-color: #ffff;
font-size: inherit;
border: 1px solid #807973;
font-family: inherit;
` 

const Search = ({ placeHolder, setSearchTerm}) => {
    return (
        <Wrapper>
            <InputWrapper placeholder={placeHolder} onChange={(event) => setSearchTerm(event.target.value)} /> 
        </Wrapper>
    )
}

export default Search;