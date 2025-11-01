import { Link } from "react-router-dom";
import './GameCard.css'

export default function GameCard({game}){
    return(
	<>
	    <li style={ {width: '30%', height:'auto',padding: '10px', backgroundColor: '#333', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', transition: 'ease-in-out 500ms'}}> 
		<Link to={`/games/${game.id}`} style = {{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center'} }>
		    <img src={game.thumbnail} style={ {width: '100%', borderRadius: '30px'} } />
		    <span style={{fontSize: '20px'}}>{game.title}</span>
		</Link>
	    </li>
	</>
    );
}
