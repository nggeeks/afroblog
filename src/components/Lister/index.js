import React, { useEffect, useState } from 'react';
import getPosts from '../../services/posts';
import Post from './Post'
import CreatePost from './CreatePost';
import { isEmpty } from 'lodash';

const Lister = () => {

	const [loading, setLoading] = useState(true);
	const [allPosts, setPosts] = useState([]);

	useEffect(() => {
		getPosts().then(data => {
			setLoading(false);
			setPosts(data);
		});
	}, []);

	const onDeletePost = (id) => {
		setPosts(allPosts.filter((post) => post.id !== id))
	}

	const onCreatePost = post => {
		// TODO: implement
	}


	return (<div className="postList">
		  {loading && <p>Loading...</p>}
		  {isEmpty(allPosts) && <p>No posts available...</p>}
		  {allPosts.map(({ id, title, body, author }) => 
		  <Post
		  key={id}
		  id={id}
		  title={title}
		  body={body}
		  author={author}
		  onDelete={onDeletePost}
		  />)}
		 <CreatePost />
	</div>)

};

export default Lister;