import { Link } from "react-router-dom";
import './GameCard.css'
import { useTheme } from "../context/ThemeContext";

export default function GameCard({key, game, toggleFavorite, isFavorite}){
    const { theme } = useTheme();

    return(
	<>
	    <li key={key} style={ {width: '30%',minWidth: '25%', height:'auto',padding: '10px', backgroundColor: theme==='dark'?'#333':'purple', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', transition: 'ease-in-out 500ms'}}> 
		<button onClick={() => toggleFavorite(game)} >
		    {isFavorite ? '🤍' : '❤️'}
		</button>
		<Link to={`/games/${game.id}`} style = {{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center'} }>
		    <img src={game.thumbnail} style={ {width: '100%', borderRadius: '30px'} } />
		    <span style={{fontSize: '20px'}}>{game.title}</span>
		</Link>
	    </li>
	</>
    );
}
