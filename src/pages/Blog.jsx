import { Link } from 'react-router-dom';
import { posts } from '../../data/posts'

export default function Blog(){
    
    return(
	<>
	    <div>
		<h1>To jest Blog</h1>
		
		<ul style={ { display: 'flex', flexDirection: 'column', gap: '2rem' } }>
		    { posts.map( post => (
			<li key={post.id}> 
			    <Link to={`/blog/${post.id}`}>
			    {post.title} - <small>{post.author}</small>
			    </Link>
			</li>
			
		    )) }
		</ul>
	    </div>
	</>
    );

}
