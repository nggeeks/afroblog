import React, { useEffect, useState } from 'react';
import getPosts from '../../services/posts';
import Post from './Post'
import CreatePost from './CreatePost';
import { isEmpty, last } from 'lodash';
import postData from '../../data/posts/data.json'


const Lister = () => {

	const [loading, setLoading] = useState(true);
	const [allPosts, setPosts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

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
		const { id = 0 } = last(allPosts);

		setPosts([...allPosts, { ...post, id: (id + 1) }]);

	}

	const onSearchTermChange = (event) => {
		setSearchTerm(event.target.value);

		if (isEmpty(event.target.value)) {
			setPosts(postData);
		}

		if (searchTerm.length >= 3) {
			setPosts(allPosts.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase())));
		}

	}


	return (<div className="postList">
		{loading && <p>Loading...</p>}
		{isEmpty(allPosts) && <p>No posts available...</p>}
		<div>
			<input placeholder="search post by title...." value={searchTerm} onChange={onSearchTermChange} />
		</div>

		{allPosts.map(({ id, title, body, author }) =>
			<Post
				key={id}
				id={id}
				title={title}
				body={body}
				author={author}
				onDelete={onDeletePost}
			/>)}
		<CreatePost
			onCreate={onCreatePost}
		/>
	</div>)

};

export default Lister;

