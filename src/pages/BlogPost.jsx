import { Link, useParams } from "react-router-dom";
import { posts } from '../../data/posts';

export default function BlogPost() {
    const {postId} = useParams();
    const fetchPost = (id) => posts.find(p => p.id == parseInt(id));
    const post = fetchPost(postId);

    return (
	<div>
	    <Link to='/blog'>Powrót do blog</Link>
	    <h1>{post.title}</h1>
	    <small style={ {color: 'white'} }>autor: {post.author}</small>

	    <p>
		{post.content}
	    </p>

	</div>
    ); 
}
