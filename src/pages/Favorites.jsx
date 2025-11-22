import { useState, useEffect, useReducer} from 'react';
import GameCard from '../components/GameCard';
import { useTheme } from '../context/ThemeContext';
import { favoritesHook } from '../context/FavoriteContex';

export default function Favorites(){
    const {theme} = useTheme();
    const [gamesDB, setGamesDB] = useState([]);
    const {isFavorite, toggleFavorite} = favoritesHook();

   
   
    useEffect(()=> {
	fetchGames();
    }, [])

    const fetchGames = async () => {
            const response = await fetch('/api/games');
            const data = await response.json();
	    console.log(data);
	    setGamesDB(data);
        };

   return (
	<div style={{
	    backgroundColor: theme === 'dark' ? '#222' : '#eee',
	    color: theme === 'dark' ? '#eee' : '#222',
	    minHeight: '100vh',
	    padding: '20px'
	}}>
	    <h1>Lista gier ulubionych Free2Play</h1>
	    <h2>Gry</h2>
	    <ul style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row' , gap: '20px', listStyleType: 'none'}}>
		{gamesDB.filter((game) => isFavorite(game))
		    .map(game => (
		    <GameCard key={game.id} game={game} toggleFavorite={toggleFavorite} isFavorite={isFavorite(game)} /> 
		))		}
	    </ul>
	</div>
   );
}
