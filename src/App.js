import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Search from './components/search';
import Post from './components/postview';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const post = {
    id: 1,
    title: 'This is a title from app',
    body: 'This is the body of the post',
    author: 'Bayo Jegede'
  }

  const onPostDelete = (id) => {
    console.log(id)
  }

  return (
    <div className="App">
      <Header logo={logo} text={'React Afroblog'} />
      <Search placeHolder={'search post by title...'} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Post title={post.title} body={post.body} author={post.author} id={post.id} onPostDelete={onPostDelete} />
    </div>
  );
}

export default App;
